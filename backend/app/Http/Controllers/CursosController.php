<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cursos;

class CursosController extends Controller
{
    public function __construct(){

    }

    public function index(){
        $cursos = Cursos::all();
        return $cursos;
    }

    public function show($id){
        $cursos = Cursos::findOrFail($id);
        return $cursos;
    }
}
