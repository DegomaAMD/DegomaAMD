<?php

use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ResetPassword;
use App\Http\Controllers\UserAuthenticationController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Resources\ProductResource;

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
Route::post('/placeOrders', [OrdersController::class, 'placeOrders']);
Route::post('/reset-password', [ResetPassword::class]);
Route::get('/product', function(){
    $product = Product::all();
    return response()->json($product);
});

Route::middleware('auth:api')->group(function(){
    Route::post('/logout', [UserAuthenticationController::class, 'logout']);
    Route::get('/user', [UserAuthenticationController::class, 'getUserByToken']);
    Route::resource('/order', OrdersController::class);
    Route::resource('/User', UserAuthenticationController::class);
    Route::get('/cart/items', [CartController::class, 'getCartItems']);
    Route::post('/cart/add', [CartController::class, 'addToCart']);
    Route::resource('/products', ProductController::class);
});

