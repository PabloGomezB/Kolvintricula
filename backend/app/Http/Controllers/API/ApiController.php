<?php

namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller;

use App\Models\Course;

class ApiController extends Controller
{

    function saveEnrolment(Request $request){
        
        return $request->getContent();



        // return ['NOMBRE'=>$request->nom, 'TIPUS'=>$request->tipus, 'VALORACION'=>$request->valoracio];



        // $matricula = new Matricula;
        // $matricula->curso = $request->curso;
        // $matricula->materias = $request->materias;
        // $result = $matricula->save();
        // if ($result){
        //     return ['response'=>'OK'];
        // }
        // else{
        //     return ['response'=>'FAIL'];
        // }
    }
}
