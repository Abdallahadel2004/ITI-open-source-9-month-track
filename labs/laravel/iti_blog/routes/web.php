<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\posts_controller;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

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
Route::post('/posts/{id}/comments', [CommentController::class, 'store'])->middleware('auth');

