<?php

namespace App\Http\Controllers;

use App\Models\posts;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate(['body' => 'required|min:3']);

        $post = posts::findOrFail($id);
        
        Comment::create([
            'body' => $request->body,
            'post_id' => $post->id,
            'user_id' => auth()->id()
        ]);

        return back();
    }
}
