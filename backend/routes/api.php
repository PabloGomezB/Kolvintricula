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

    // $courseInfo = DB::table('modules')->where('id_course', $id)->get();

    // $courseInfo = DB::table('u_f_s')
    //     ->join('modules', 'u_f_s.id_module', '=', 'modules.id')
    //     ->where('u_f_s.id_module', $id)
    //     ->select('u_f_s.*', 'modules.*')
    //     ->get();


    $courseInfo = DB::table('u_f_s')
        ->join('modules', 'u_f_s.id_module', '=', 'modules.id')
        ->where('u_f_s.id_module', $id)
        // ->select('u_f_s.*', 'modules.*')
        ->get();

        // select u_f_s.*, modules.* from u_f_s INNER JOIN modules on u_f_s.id_module = modules.id where u_f_s.id_module=1
    return $courseInfo;
}]);

Route::post('students/find', [ApiController::class, 'searchStudent']);