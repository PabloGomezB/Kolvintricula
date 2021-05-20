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

            $addStudentResult = ["addStudentResult" => $this->addStudent($studentData)];
            $addCustodiansResult = ["addCustodiansResult" => $this->addCustodians($custodiansData, $studentData["nif"])];
            // $addEnrolmentResult = ["addEnrolmentResult" => $this->addJsonEnrolment($academicData, $studentData["nif"])];

            return array_merge($addStudentResult, $addCustodiansResult, $addEnrolmentResult);
        }
        catch(\Illuminate\Database\QueryException | Exception $ex){ 
            return $ex->getMessage(); 
        }

        
        // try{
        //     $this->addStudent($request);
        // }
        // catch(\Illuminate\Database\QueryException $ex){ 
        //     return $ex->getMessage(); 
        // }

        // $enrolmentData = $request->getContent();
        // $aux = json_decode($enrolmentData, true);
        // $studentData = $aux["values"]["student"];


        // $idNewStudent = Student::where('nif', $studentData["nif"])->get('id');
        // $newEnrolment = new Enrolment;
        // $academicData = $aux["values"]["academic_data"];

        // $newEnrolment->id_student = $idNewStudent[0]["id"];
        // $newEnrolment->json_course_module_uf = $academicData;

        // $newEnrolment->save();

        




        // if ($result1 && $result2){
        //     return 'OK';
        // }
        // else{
        //     return 'FAIL';
        // }


        // $studentData = array();
        // foreach ($enrolmentData["student"] as $value) {
        //     array_push($studentData, $value);
        // }

        // $custodiansData = array();
        // foreach ($enrolmentData["custodians"] as $value) {
        //     array_push($custodiansData, $value);
        // }

        // $academicData = array();
        // foreach ($enrolmentData["academic_data"] as $value) {
        //     array_push($academicData, $value);
        // }


        // return array_merge($studentData, $custodiansData, $academicData);
    }

    function addStudent($studentData){

        $newStudentID = Student::where('nif', $studentData["nif"])->get("id");
        $email_pedralbes = $this->createPedralbesEmail($studentData);
        $photo_path = "error";

        try{
            $photo_path = $this->uploadStudentPhoto($studentData);
        }
        catch(\Illuminate\Database\QueryException | Exception $ex){
            return $ex->getMessage();
        }

        if(count($newStudentID) != 0 && $studentData["updateStudent"]){
            $newStudent = Student::find($newStudentID[0]["id"]);
        }
        else{
            $newStudent = new Student;
        }

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
            return $ex->getMessage(); 
        }

        $response = array(["response" => "OK", "email_pedralbes" => $email_pedralbes]);
        return $response;
    }

    function createPedralbesEmail($studentData){

        $year = substr(date("Y"), 2, 4);
        $newEmail = 'a' . $year;
        $name = substr($studentData["name"], 0, 3);
        $last1 = substr($studentData["last_name1"], 0, 3);
        $last2 = substr($studentData["last_name2"], 0, 3);
        return $newEmail . strtolower($name) . strtolower($last1) . strtolower($last2) . '@inspedralbes.cat';
    }

    function uploadStudentPhoto($studentData){

        $image = $studentData["photo_path"];
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = rand() . '.png';
        Storage::disk('public')->put($imageName, base64_decode($image));
        return $imageName;
    }

    function addCustodians($custodiansData, $newStudentNif){

        if (!empty($custodiansData)){ // Necesario porque a veces se buggea
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
                        return $ex->getMessage();
                    }
                }
                return "OK";
            }
        }
        return "NO_CUSTODIANS";
    }

    function addJsonEnrolment($studentData, $newStudentNif){

        $id_student = Student::where('nif', $newStudentNif)->get('id');

        try {
            $newEnrolment = new Enrolment;

            $newEnrolment->id_student = $id_student["0"]["id"];
            $newEnrolment->json_course_module_uf = $studentData;
            $newEnrolment->save();
        } catch(\Illuminate\Database\QueryException | Exception $ex){
            return $ex->getMessage(); 
        }

        return "OK";
    }
}
