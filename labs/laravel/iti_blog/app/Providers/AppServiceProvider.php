<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use App\Models\posts;
use App\Policies\PostPolicy;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Gate::policy(posts::class, PostPolicy::class);
        Gate::define('is-admin', function ($user) {
            return $user->role === 'admin' || $user->role === 'super-admin';
        });

        Gate::define('is-super-admin', function ($user) {
            return $user->role === 'super-admin';
        });
        Gate::before(function ($user, $ability) {
            if ($user->role === 'super-admin') {
                return true;
            }
        });
    }
}
