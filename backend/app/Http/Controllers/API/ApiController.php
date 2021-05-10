<?php

namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller;

use App\Models\Course;

class ApiController extends Controller
{
    function getCourses(){
        return Course::all(['id', 'type', 'name', 'description', 'state']);
    }
}
