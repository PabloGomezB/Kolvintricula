<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KolvintriculaController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// Route::get('/admin/index', [KolvintriculaController::class, 'index'])
// ->middleware(['auth'])->name('admin.index');
Route::get('/admin/index', function () {
    return view('admin.index');
})->middleware(['auth'])->name('admin.index');

Route::resource('admin/users', UserController::class)
->middleware(['auth']);




Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

// Route::get('/', Controller::class, 'index');