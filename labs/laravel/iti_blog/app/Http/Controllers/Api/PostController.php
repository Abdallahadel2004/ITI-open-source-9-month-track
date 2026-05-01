<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

class PostController extends Controller
{

    public function index()
    {
        $articles = Article::with('user')->paginate(10);

        return ArticleResource::collection($articles);
    }


    public function show($id)
    {
        $article = Article::with('user')->findOrFail($id);

        return new ArticleResource($article);
    }


    public function store(StoreArticleRequest $request)
    {
        $article = Article::create(array_merge(
            $request->validated(),
            ['user_id' => $request->user()->id]
        ));

        return new ArticleResource($article->load('user'));
    }
}
