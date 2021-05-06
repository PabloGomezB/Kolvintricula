<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;

class ApiController extends Controller
{
    function getCourses(){
        return Course::all(['id', 'type', 'name', 'description', 'state']);
    }
}
