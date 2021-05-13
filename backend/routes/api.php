<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Course;
use App\Models\Module;
use App\Models\Student;

use App\Http\Controllers\API\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('courses', [ApiController::class, function(){
    return Course::all(['id', 'type', 'name', 'description', 'state']);
}]);

Route::get('courses/{id}',[ApiController::class, function($id){
    return Module::where('id_course','=',$id)->get(['id','name', 'description']);
}]);

Route::get('student/{nif}', [ApiController::class, function($nif){
    return Student::where('nif', $nif)->get();
}]);

Route::post('enrolments/add', [ApiController::class, 'addEnrolment']);