<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Course;
use App\Models\Module;
use App\Models\Student;

use App\Http\Controllers\API\ApiController;
use Illuminate\Support\Facades\DB;

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

// Devuelve el curso con el correspondiente id
Route::get('courses/{id}',[ApiController::class, function($id){
    return Module::where('id_course','=',$id)->get(['id','name', 'description']);
}]);

// Devuelve el estudiante con el correspondiente nif
Route::get('student/{nif}', [ApiController::class, function($nif){
    return Student::where('nif', $nif)->get();
}]);

// Devuelve un array de booleans indicando si ha encontrado un estudiante con el mismo nif o email
// Parametros: nif, email
Route::post('students/find', [ApiController::class, 'searchStudent']);

Route::get('courses/{id}/modules',[ApiController::class, function($id){ 

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

    // $jsonFinal = json_encode($jsonFinal);

    return $jsonFinal;
}]);


// Route::post('students/add', [ApiController::class, 'addStudent']);

// Añade (o actualiza) un estudiante, junto con sus tutores y su matrícula
// Parametros: JSON con toda la información
Route::post('enrolments/add', [ApiController::class, 'addEnrolment']);