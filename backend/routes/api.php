<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Course;
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

// Devuelve la lista de todos los cursos
Route::get('courses', [ApiController::class, function(){
    return Course::all(['id', 'type', 'name', 'description', 'state']);
}]);

// Devuelve el estudiante con el correspondiente nif
Route::get('student/{nif}', [ApiController::class, function($nif){
    return Student::where('nif', $nif)->get();
}]);

Route::get('courses/{id}/modules',[ApiController::class, 'modules_ufsGenerator']);

// Devuelve un array de booleans indicando si ha encontrado un estudiante con el mismo nif o email
// Parametros: nif, email
Route::post('students/find', [ApiController::class, 'searchStudent']);

// Añade (o actualiza) un estudiante, junto con sus tutores y su matrícula
// Parametros: JSON con toda la información
Route::post('enrolments/add', [ApiController::class, 'addEnrolment']);
