<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Custodian;
use App\Models\Enrolment;
use App\Models\Student;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Mail as FacadesMail;

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
            $sendEmailResult = ["sendEmailResult" => $this->sendEmail($studentData["nif"])];
            if ($sendEmailResult["sendEmailResult"]["response"] == "FAIL"){
                return $sendEmailResult;
            }

            return array_merge($addStudentResult, $addCustodiansResult, $addEnrolmentResult, $sendEmailResult);
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

        $normalizeChars = array(
            'Š'=>'S', 'š'=>'s', 'Ð'=>'Dj','Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A',
            'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I',
            'Ï'=>'I', 'Ñ'=>'N', 'Ń'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U',
            'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss','à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a',
            'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i',
            'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ń'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u',
            'ú'=>'u', 'û'=>'u', 'ü'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y', 'ƒ'=>'f',
            'ă'=>'a', 'î'=>'i', 'â'=>'a', 'ș'=>'s', 'ț'=>'t', 'Ă'=>'A', 'Î'=>'I', 'Â'=>'A', 'Ș'=>'S', 'Ț'=>'T',
        );

        try {
            $name_normalized = strtr($studentData["name"], $normalizeChars);
            $lastName1_normalized = strtr($studentData["last_name1"], $normalizeChars);
            $lastName2_normalized = strtr($studentData["last_name2"], $normalizeChars);

            $year = substr(date("Y"), 2, 4);
            $newEmail = 'a' . $year;
            $name = substr($name_normalized, 0, 3);
            $last1 = substr($lastName1_normalized, 0, 3);
            $last2 = substr($lastName2_normalized, 0, 3);
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

        try {
            $id_student = Student::where('nif', $newStudentNif)->get('id');
            $newEnrolment = new Enrolment;
            $newEnrolment->id_student = $id_student["0"]["id"];
            $newEnrolment->json_course_module_uf = $studentData;
            $newEnrolment->save();
        } catch(\Illuminate\Database\QueryException | Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }
        return ["response"=> "OK"];
    }

    function modules_ufsGenerator($id){

        $jsonFinal = array();

        //set the total number of courses in this loop
        //this loop finds all the modules of the selected course in each year
        for ($i=1; $i <= 2; $i++) { 

            $jsonModules = DB::table('modules')
                ->join('u_f_s','u_f_s.id_module','=','modules.id')
                ->where('modules.id_course',$id)
                ->where('u_f_s.year', $i)            
                ->groupBy('modules.id')
                ->get(['modules.id','modules.name','modules.description']);
                

            $jsonModules = json_decode($jsonModules, TRUE);

            //this loop finds all the ufs in each module of the actual year
            for($j = 0; $j < sizeof($jsonModules); $j++) {
                
                $jsonUfs = DB::table('u_f_s')
                    ->where('u_f_s.year',$i)
                    ->where('u_f_s.id_module',$jsonModules[$j]['id'])
                    ->get(['u_f_s.name','u_f_s.description','u_f_s.year','u_f_s.id_module']);

                $jsonModules[$j]['ufs'] = $jsonUfs;
            }

            $courseInfo = array("year" => $i ,"modules" => $jsonModules);
            array_push($jsonFinal,$courseInfo);
        }

        return $jsonFinal;
    }

    function sendEmail($newStudentNif){

        try {
            $student = Student::where('nif', $newStudentNif)->first();
            $enrolment_string = Enrolment::where('id_student', $student->id)->orderBy('updated_at', 'desc')->first();
            $enrolment = json_decode($enrolment_string, true);
            $custodians = Custodian::where('id_student', $student->id)->get();
        } catch(\Illuminate\Database\QueryException | Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }

        $data = [
            'subject' => "Copia de matrícula - INS Pedralbes",
            'email' => $student->email_personal,
            'student' => $student,
            'custodians' => $custodians,
            'enrolment' => $enrolment,
        ];

        try {
            $pdf = PDF::setOptions([
                'logOutputFile' => storage_path('logs/log.htm'),
                'tempDir' => storage_path('logs/')
            ])
            ->loadView('layouts.email-pdf-template', $data);

            FacadesMail::send('layouts.email-body-template', $data, function($message) use ($data, $pdf) {
                $message->to($data['email'])
                ->subject($data['subject'])
                ->attachData($pdf->output(), "Resguardo_Matricula.pdf");
            });
        } catch(Exception $ex){
            return ["response"=> "FAIL", "message" => $ex->getMessage()];
        }
        return ["response"=> "OK"];
    }
}
