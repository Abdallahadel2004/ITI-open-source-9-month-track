<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class posts_controller extends Controller
{
private function getPosts()
  {
     return [
       [
                'title' => 'title1',
                'content' => 'content1',
                'author' => 'author1'
       ],
       [
                'title' => 'title2',
                'content' => 'content2',
                'author' => 'author2'
       ],
       [
                'title' => 'title3',
                'content' => 'content3',
                'author' => 'author3'
       ]
     ];
  }

    public function index()
    {
        $posts = $this->getPosts();
        return view('posts', compact('posts'));
    }
    
    public function show($title)
    {
        $posts = $this->getPosts();
        foreach ($posts as $p) {
            if ($p['title'] === $title) {
                $post = $p;
                break;
            }
        }
        return view('show', compact('post'));
    }
}