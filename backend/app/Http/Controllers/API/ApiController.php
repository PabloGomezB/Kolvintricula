<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Custodian;
use App\Models\Enrolment;
use App\Models\Student;
use Exception;

use Illuminate\Support\Facades\Storage;

class ApiController extends Controller
{

    function searchStudent(Request $request){

        $array = array();
        $data = $request->getContent();
        $studentData = json_decode($data, true);

        try { 
            $nifDB = Student::where('nif', $studentData["nif"])->get();
            $emailDB = Student::where('email_personal', $studentData["email"])->get();
        } catch(\Illuminate\Database\QueryException $ex){ 
            return $ex->getMessage(); 
        }

        if(count($nifDB) != 0){
            $array["nifFound"]=true;
        }
        else{
            $array["nifFound"]=false;
        }

        if(count($emailDB) != 0){
            $array["emailFound"]=true;
        }else{
            $array["emailFound"]=false;
        }

        return json_encode($array);
    }

    function addEnrolment(Request $request){

        $addStudentResult = array();
        $addCustodiansResult = array();
        $addEnrolmentResult = array();

        try{
            $data = $request->getContent();
            $decodedData = json_decode($data, true);
            $values = $decodedData["values"];

            $studentData = $values["student"];
            $custodiansData = $values["custodians"];
            $academicData = $values["academic_data"];

            // Al primer error encontrado se hace un return para evitar trabajo innecesario y el guardado de datos inservibles
            $addStudentResult = ["addStudentResult" => $this->addStudent($studentData)];
            if ($addStudentResult["addStudentResult"]["response"] == "FAIL"){
                return $addStudentResult;
            }
            $addCustodiansResult = ["addCustodiansResult" => $this->addCustodians($custodiansData, $studentData["nif"])];
            if ($addCustodiansResult["addCustodiansResult"]["response"] == "FAIL"){
                return $addCustodiansResult;
            }
            $addEnrolmentResult = ["addEnrolmentResult" => $this->addJsonEnrolment($academicData, $studentData["nif"])];
            if ($addEnrolmentResult["addEnrolmentResult"]["response"] == "FAIL"){
                return $addEnrolmentResult;
            }

            return array_merge($addStudentResult, $addCustodiansResult, $addEnrolmentResult);
        }
        catch(\Illuminate\Database\QueryException | Exception $ex){ 
            return $ex->getMessage(); 
        }
    }


    /**
     * START ADD STUDENT FUNCTIONS
     */
    function addStudent($studentData){

        // En caso de hacer update, obtenermos la info del estudiante existente
        // Sino creamos uno nuevo. Doble check para evitar bugs
        if ($studentData["updateStudent"]){
            $newStudentID = Student::where('nif', $studentData["nif"])->get("id");
            if(count($newStudentID) != 0){
                $newStudent = Student::find($newStudentID[0]["id"]);
            }
            else $newStudent = new Student;
        }
        else{
            $newStudent = new Student;
        }

        // Guardamos la imagen en servidor.
        // Si el resultado de la funcion en un array entonces hay error (ver returns de la funcion)
        $photo_path = $this->uploadStudentPhoto($studentData);
        if (is_array($photo_path)){
            return $photo_path;
        }

        // Creamos el email.
        // Si el resultado de la funcion en un array entonces hay error (ver returns de la funcion)
        $email_pedralbes = $this->createPedralbesEmail($studentData);
        if (is_array($email_pedralbes)){
            return $email_pedralbes;
        }

        // try-catch para guardar el nuevo estudiante en la base de datos
        try {
            $newStudent->nif = $studentData["nif"];
            $newStudent->name = $studentData["name"];
            $newStudent->last_name1 = $studentData["last_name1"];
            $newStudent->last_name2 = $studentData["last_name2"];

            $strtotime = strtotime($studentData["date_birth"]);
            $newStudent->date_birth = date("Y-m-d", $strtotime);

            $newStudent->mobile_number = $studentData["mobile_number"];
            $newStudent->enrolment_status = 'BORRADOR';
            $newStudent->email_personal = $studentData["email_personal"];
            $newStudent->email_pedralbes = $email_pedralbes;
            $newStudent->photo_path = $photo_path;
            $newStudent->save();
        } catch(\Illuminate\Database\QueryException | Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }

        // Si todo es OK se devuelve la respuesta junto con el email creado para mostrarlo en front
        return ["response" => "OK", "email_pedralbes" => $email_pedralbes];
    }

    function createPedralbesEmail($studentData){

        try {
            $year = substr(date("Y"), 2, 4);
            $newEmail = 'a' . $year;
            $name = substr($studentData["name"], 0, 3);
            $last1 = substr($studentData["last_name1"], 0, 3);
            $last2 = substr($studentData["last_name2"], 0, 3);
        } catch(Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }
        return $newEmail . strtolower($name) . strtolower($last1) . strtolower($last2) . '@inspedralbes.cat';
    }

    function uploadStudentPhoto($studentData){

        try {
            $image = $studentData["photo_path"];
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace(' ', '+', $image);
            $imageName = rand() . '.png';
            Storage::disk('public')->put($imageName, base64_decode($image));
        } catch(Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }
        return $imageName;
    }
    /**
     * END ADD STUDENT FUNCTIONS
     */


    function addCustodians($custodiansData, $newStudentNif){

        if (!empty($custodiansData)){ // Doble check necesario porque el empty() a veces se buggea
            if ($custodiansData[0]["name"] != null || $custodiansData[0]["name"] != ""){
                $id_student = Student::where('nif', $newStudentNif)->get('id');

                foreach ($custodiansData as $custodian) {
                    try {
                        $newCustodian = new Custodian;
                        $newCustodian->id_student = $id_student["0"]["id"];
                        $newCustodian->responsible = $custodian["type"];
                        $newCustodian->nif = $custodian["nif"];
                        $newCustodian->name = $custodian["name"];
                        $newCustodian->last_name1 = $custodian["last_name1"];
                        $newCustodian->last_name2 = $custodian["last_name2"];
                        $newCustodian->mobile_number = $custodian["mobile_number"];
                        $newCustodian->email = $custodian["email"];
                        $newCustodian->save();
                    } catch(\Illuminate\Database\QueryException | Exception $ex){
                        return ["response"=> "FAIL", "message" => $ex->getMessage()];

                    }
                }
                return ["response"=> "OK", "message" => count($custodiansData) . " custodians added"];
            }
        }
        return ["response"=> "OK", "message" => "NO_CUSTODIANS"];
    }


    function addJsonEnrolment($studentData, $newStudentNif){

        $id_student = Student::where('nif', $newStudentNif)->get('id');

        try {
            $newEnrolment = new Enrolment;
            $newEnrolment->id_student = $id_student["0"]["id"];
            $newEnrolment->json_course_module_uf = $studentData;
            $newEnrolment->save();
        } catch(\Illuminate\Database\QueryException | Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }
        return ["response"=> "OK"];
    }
}
