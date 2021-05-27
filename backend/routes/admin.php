<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\ModuleController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\UFController;
use App\Http\Controllers\Admin\CustodianController;
use App\Http\Controllers\Admin\FullCalendarController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\DB;

Route::get('', function () {
    return view('admin.index');
})->name('admin');

// Crea automáticamente las rutas a las funciones predefinidas en UserController
Route::resource('users', UserController::class);
Route::resource('courses', CourseController::class);
Route::resource('modules', ModuleController::class);
Route::resource('students', StudentController::class);
Route::resource('ufs', UFController::class);
Route::resource('custodians', CustodianController::class);

/* Params: [ruta,template] */
Route::view('profile', 'admin.user.profile')->name('profile');

Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');

//Calendar routes
Route::get('fullcalendar', [FullCalendarController::class, 'index']);
Route::post('fullcalendarAjax', [FullCalendarController::class, 'ajax']);

Route::get('courses/update/state/{id}/{newState}', function($id, $newState){
    DB::table('courses')->where('id', $id)->update(['state' => $newState]);
    return redirect()->route('admin');
})->name('courses.update.state');