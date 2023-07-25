<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/dashboard', [UsersController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //User
    Route::get('/listuser/{place}/{name}', [UsersController::class, 'index'])->name('user.list');
});


Route::get('/', [UsersController::class, 'create'])
    ->name('add-users')->middleware('guest');

Route::get('/edit/{id}', [UsersController::class, 'edit'])
    ->name('add-users')->middleware('auth');

Route::post('add', [UsersController::class, 'store'])->name('add');
Route::patch('update/{id}', [UsersController::class, 'update']);

Route::delete('/delete', [UsersController::class, 'destroy'])->name('user.destroy');
require __DIR__ . '/auth.php';
