<?php

namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller;

use App\Models\Course;
use App\Models\Student;
use App\Models\Enrolment;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{

    function addEnrolment(Request $request){

        $enrolmentData = $request->getContent();
        $aux = json_decode($enrolmentData, true);
        $studentData = $aux["values"]["student"];

        $newStudent = new Student;
        $newStudent->nif = $studentData["nif"];
        $newStudent->name = $studentData["name"];
        $newStudent->last_name1 = $studentData["last_name1"];
        $newStudent->last_name2 = $studentData["last_name2"];
        $newStudent->date_birth = "2022-09-02";
        $newStudent->mobile_number = $studentData["mobile_number"];
        $newStudent->enrolment_status = 'MATRICULADO';
        $newStudent->email_personal = $studentData["email_personal"];
        // $newStudent->email_pedralbes = 'nuevo@email.com';
        // $newStudent->photo_path = 'photo path';

        // $result1 = $newStudent->save();
        $newStudent->save();


        $idNewStudent = Student::where('nif', $studentData["nif"])->get('id');
        $newEnrolment = new Enrolment;
        $academicData = $aux["values"]["academic_data"];

        $newEnrolment->id_student = $idNewStudent[0]["id"];
        $newEnrolment->json_course_module_uf = $academicData;

        //$result2 = $newEnrolment->save();
        $newEnrolment->save();

        
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
}
