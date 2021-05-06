<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CourseController;

use App\Http\Controllers\Admin\ProfileController;


Route::get('', function () {
    return view('admin.index');
})->name('admin');

// Crea automáticamente las rutas a las funciones predefinidas en UserController
Route::resource('users', UserController::class);

// Crea automáticamente las rutas a las funciones predefinidas en CourseController
Route::resource('courses', CourseController::class);

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->name('dashboard');

/* Params: [ruta,template] */
Route::view('profile', 'admin.user.profile')->name('profile');
Route::put('profile', [ProfileController::class , 'update'])->name('profile.update');

// Route::resource('courses2', CourseController::class);