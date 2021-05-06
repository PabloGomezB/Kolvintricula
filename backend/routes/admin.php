<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CourseController;

Route::get('', function () {
    return view('admin.index');
})->name('admin');

// Crea automáticamente las rutas a las funciones predefinidas en UserController
Route::resource('users', UserController::class);

// Crea automáticamente las rutas a las funciones predefinidas en CourseController
Route::resource('courses', CourseController::class);