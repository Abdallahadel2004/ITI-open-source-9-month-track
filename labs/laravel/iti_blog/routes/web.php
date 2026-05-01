<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\posts_controller;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\SocialAuthController;

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
Route::get('/posts/create',[posts_controller::class,'create'])->middleware('auth');
Route::post('/posts', [posts_controller::class, 'store'])->middleware('auth');
Route::get('/posts/deleted', [posts_controller::class,'deleted']);
Route::get('/posts/{id}', [posts_controller::class, 'show']);
Route::get('/posts/{id}/edit', [posts_controller::class,'edit'])->middleware('auth');
Route::post('/posts/{id}', [posts_controller::class,'update'])->middleware('auth');
Route::get('/posts/{id}/delete', [posts_controller::class,'delete'])->middleware('auth');
Route::delete('/posts/{id}', [posts_controller::class,'forceDelete'])->middleware('auth');
Route::get('/posts/{id}/restore', [posts_controller::class,'restore']);
Route::post('/posts/{id}/comments', [CommentController::class, 'store'])->middleware('auth');
Route::delete('/comments/{id}', [CommentController::class, 'destroy'])->middleware('auth');


Route::get('auth/github',[SocialAuthController::class,'redirect'])->name('auth.github');
Route::get('auth/github/callback',[SocialAuthController::class,'handleGithubCallback']);
