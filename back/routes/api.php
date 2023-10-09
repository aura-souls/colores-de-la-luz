<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TherapyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WhatsController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::get('/therapies', [TherapyController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/therapies', [TherapyController::class, 'store']);
    Route::get('/therapies/{id}', [TherapyController::class, 'show']);
    Route::put('therapies/{id}', [TherapyController::class, 'update']); 
    Route::delete('therapies/{id}', [TherapyController::class, 'destroy']);
});

Route::get('send-mail', [MailController::class, 'index']);
Route::post('send-message', [WhatsController::class, 'sendMessages']);
