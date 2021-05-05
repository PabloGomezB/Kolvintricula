<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KolvintriculaController extends Controller
{
    //
    public function index(){
        
        $info = DB::select('select * from cursos');

        return view('index',[
            'databaseInfo' => $info
        ]);
    }
}
