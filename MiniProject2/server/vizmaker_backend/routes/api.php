<?php

use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\UserAuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserAuthenticationController::class, 'register']);
Route::post('/login', [UserAuthenticationController::class, 'login']);


Route::middleware('auth:api')->group(function(){
    Route::post('/logout', [UserAuthenticationController::class, 'logout']);
    Route::resource('/order', OrderDetailsController::class);
    Route::resource('/User', UserController::class);
});
