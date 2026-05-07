<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\posts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Http\Resources\PostResource;
use App\Rules\MaxPostsRule;


class PostController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', Password::min(8)],
        ]);

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user'    => $user,
            
        ], 201);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email'    => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (! $user || ! Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Logged in successfully',
            'user'    => $user,
            'token'   => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    public function index()
    {
        $posts = posts::with(['user', 'comments.user'])->paginate(10);

        return PostResource::collection($posts);
    }


    public function show($id)
    {
        $post = posts::with(['user', 'comments.user'])->findOrFail($id);

        return new PostResource($post);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'   => ['required', 'string', 'max:255', new MaxPostsRule($request->user()->id)],
            'content' => ['required', 'string'],
            'image'   => ['nullable', 'string'],
        ]);

        $post = posts::create(array_merge(
            $validated,
            ['author' => $request->user()->id]
        ));

        return new PostResource($post->load('user'));
    }
}
