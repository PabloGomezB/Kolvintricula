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

Route::get('courses/{id}/modules',[ApiController::class, function($id){ 

    $jsonUfs = DB::table('u_f_s')
        ->join('modules', 'u_f_s.id_module', '=', 'modules.id')
        ->where('modules.id_course', $id)
        ->get(['modules.name','modules.description','u_f_s.name','u_f_s.description','u_f_s.year','u_f_s.id_module']);

    $jsonModules = DB::table('modules')
        ->where('modules.id_course',$id)
        ->get(['modules.id','modules.name','modules.description']); 
    
    // $jsonModules = $jsonModules->toArray();
    // array_push($jsonModules,array("ufs"=>"asdasdasdasd"));
    
    $jsonModules = json_decode($jsonModules, TRUE);
    for($i = 0; $i < sizeof($jsonModules); $i++) {
        $jsonModules[$i]['ufs']=$jsonUfs;
    }
    //jsonModules=(array)$jsonModules;
    $jsonModules[0]['ufs']=$jsonUfs;
    //$jsonModules=(object)$jsonModules;

  //  $courseInfo1 = array("year" => 1 ,"modules" => array_merge($jsonModules->toArray(),$jsonUfs->toArray()));        
  //  $courseInfo2 = array("year" => 2 ,"modules" => array_merge($jsonModules->toArray(),$jsonUfs->toArray()));    
    
  //  $courseFinale = array($courseInfo1,$courseInfo2);
  //  $jsonFinal = json_encode($courseFinale);

    return $jsonModules;
}]);

Route::post('students/find', [ApiController::class, 'searchStudent']);