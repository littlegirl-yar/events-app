<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/auth/register', [RegisterController::class, 'register']);
Route::post('/auth/token', [LoginController::class, 'token']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/auth/logout', [LoginController::class, 'logout']);
    Route::get('me', [UserController::class, 'me']);
    Route::post('events', [EventController::class, 'store']);
    Route::get('events', [EventController::class, 'index']);
    Route::post('events/{event}/start', [EventController::class, 'start_participating']);
    Route::post('events/{event}/stop', [EventController::class, 'stop_participating']);
    Route::delete('events/{event}', [EventController::class, 'destroy']);
    Route::get('user/{user}', [UserController::class, 'show']);
});
