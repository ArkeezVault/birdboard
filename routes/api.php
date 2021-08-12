<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::get('/login',[AuthController::class, 'loginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::get('/register',[AuthController::class, 'registerForm'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);

    Route::get('/user',[AuthController::class, 'getUser'])->name('user');

    
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);  
  
});

    Route::resource('/projects', App\Http\Controllers\ProjectController::class)->middleware('jwt.verify');
    //Route::resource('/projects', App\Http\Controllers\ProjectController::class);

//888888
    Route::get('/projects/{project}/tasks', [App\Http\Controllers\TaskController::class, 'index'])->middleware('jwt.verify');
    Route::delete('/projects/{project}/tasks/{task}', [App\Http\Controllers\TaskController::class, 'destroy'])->middleware('jwt.verify');
    
    Route::get('/projects/{project}/activities', [App\Http\Controllers\ActivityController::class, 'getActivity'])->middleware('jwt.verify');
    
    Route::get('/projects/{project}/members', [App\Http\Controllers\MemberController::class, 'getMember'])->middleware('jwt.verify');
    Route::delete('/projects/{project}/members/{member}', [App\Http\Controllers\MemberController::class, 'deleteMember'])->middleware('jwt.verify');
    Route::post('/projects/{project}/invite', [App\Http\Controllers\MemberController::class, 'invite'])->middleware('jwt.verify');

//88888
    Route::post('/projects/{project}/tasks', [App\Http\Controllers\TaskController::class, 'store'])->middleware('jwt.verify');
    Route::patch('/projects/{project}/tasks/{task}', [App\Http\Controllers\TaskController::class, 'update'])->middleware('jwt.verify');

    
    Route::post('/projects/{project}/notes', [App\Http\Controllers\NoteController::class, 'store'])->middleware('jwt.verify');
    Route::patch('/projects/{project}/notes/{note}', [App\Http\Controllers\NoteController::class, 'update'])->middleware('jwt.verify');

   // Route::post('/projects/{project}/invite', [App\Http\Controllers\InvitaionController::class, 'store'])->middleware('jwt.verify');

