<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\ModuleController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\UFController;

use App\Http\Controllers\Admin\ProfileController;


Route::get('', function () {
    return view('admin.index');
})->name('admin');


// Crea automáticamente las rutas a las funciones predefinidas en UserController
Route::resource('users', UserController::class);
Route::resource('courses', CourseController::class);
Route::resource('modules', ModuleController::class);
Route::resource('students', StudentController::class);
Route::resource('ufs', UFController::class);
// Route::post('/admin/ufs/create?id={id}','UFController@create');

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->name('dashboard');

/* Params: [ruta,template] */
Route::view('profile', 'admin.user.profile')->name('profile');

Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
