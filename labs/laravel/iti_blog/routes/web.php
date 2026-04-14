<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\posts_controller;

Route::get('/', function () {
    return view('home');
});
Route::get('/posts', [posts_controller::class, 'index']);
Route::get('/posts/{title}', [posts_controller::class, 'show']);
