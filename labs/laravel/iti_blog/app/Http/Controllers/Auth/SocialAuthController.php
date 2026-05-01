<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Auth;


class SocialAuthController extends Controller
{

    public function redirect()
    {
        return Socialite::driver('github')->redirect();
    }

    public function handleGithubCallback()
    {
        $githubUser = Socialite::driver('github')->user();
        $user = User::where("email", $githubUser->getEmail())->first();
        if (!$user) {
            $user = User::create([
                "name" => $githubUser->getNickname(),
                "email" => $githubUser->getEmail(),
                'password' => encrypt('password')
            ]);
        }
        Auth::login($user);
        return redirect(route('dashboard'));
    }
}
