<?php

namespace App\Policies;

use App\Models\User;
use App\Models\posts;
use Illuminate\Auth\Access\Response;

class PostPolicy
{

    public function update(User $user, posts $post): bool
    {
        return $user->id == $post->author;
    }

    public function delete(User $user, posts $post): bool
    {
        return $user->id == $post->author;
    }
}
