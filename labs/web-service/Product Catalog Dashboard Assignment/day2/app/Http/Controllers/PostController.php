<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
    use ApiResponse;

    public function index()
    {
        $posts = Post::all();
        return $this->successResponse($posts, 'Posts fetched successfully');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'   => 'required|string|min:5|max:255',
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse('Validation Failed', 422, $validator->errors());
        }

        $post = Post::create([
            'title'   => $request->input('title'),
            'content' => $request->input('content'),
            'user_id' => Auth::id(),
        ]);

        return $this->successResponse($post, 'Post created successfully', 201);
    }

    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return $this->errorResponse('Post Not Found', 404);
        }

        return $this->successResponse($post, 'Post fetched successfully');
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return $this->errorResponse('Post Not Found', 404);
        }

        Gate::authorize('update', $post);

        $validator = Validator::make($request->all(), [
            'title'   => 'sometimes|required|string|min:5|max:255',
            'content' => 'sometimes|required|string',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse('Validation Failed', 422, $validator->errors());
        }

        $post->update($request->only(['title', 'content']));

        return $this->successResponse($post, 'Post updated successfully');
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return $this->errorResponse('Post Not Found', 404);
        }

        Gate::authorize('delete', $post);

        $post->delete();

        return $this->successResponse(null, 'Post deleted successfully');
    }
}
