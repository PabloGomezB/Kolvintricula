<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CourseController;

Route::get('', function () {
    return view('admin.index');
})->name('admin');

Route::resource('users', UserController::class);

Route::resource('courses', CourseController::class);