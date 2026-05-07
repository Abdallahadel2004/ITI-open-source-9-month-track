<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
Route::post('/register', [PostController::class, 'register']);
Route::post('/login',    [PostController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [PostController::class, 'logout']);

    Route::get('/posts',      [PostController::class, 'index']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    Route::post('/posts',     [PostController::class, 'store']);
});

