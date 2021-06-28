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
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);  
  
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::resource('/projects', App\Http\Controllers\ProjectController::class)->middleware('auth');

    Route::post('/projects/{project}/tasks', [App\Http\Controllers\TaskController::class, 'store'])->middleware('auth');
    Route::patch('/projects/{project}/tasks/{task}', [App\Http\Controllers\TaskController::class, 'update'])->middleware('auth');

    Route::post('/projects/{project}/notes', [App\Http\Controllers\NoteController::class, 'store'])->middleware('auth');
    Route::patch('/projects/{project}/notes/{note}', [App\Http\Controllers\NoteController::class, 'update'])->middleware('auth');

    Route::post('/projects/{project}/invite', [App\Http\Controllers\InvitaionController::class, 'store'])->middleware('auth');

});
