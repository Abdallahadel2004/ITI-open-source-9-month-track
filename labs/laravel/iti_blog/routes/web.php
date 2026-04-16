<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\posts_controller;

Route::get('/', function () {
    return view('home');
});
Route::get('/posts', [posts_controller::class, 'index']);
Route::get('/posts/create',[posts_controller::class,'create']);
Route::post('/posts', [posts_controller::class, 'store']);
Route::get('/posts/deleted', [posts_controller::class,'deleted']);
Route::get('/posts/{id}', [posts_controller::class, 'show']);
Route::get('/posts/{id}/edit', [posts_controller::class,'edit']);
Route::post('/posts/{id}', [posts_controller::class,'update']);
Route::get('/posts/{id}/delete', [posts_controller::class,'delete']);
Route::delete('/posts/{id}', [posts_controller::class,'forceDelete']);
Route::get('/posts/{id}/restore', [posts_controller::class,'restore']);