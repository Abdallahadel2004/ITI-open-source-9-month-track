<?php
namespace App\Http\Controllers;
use App\Models\posts;
use Illuminate\Http\Request;

class posts_controller extends Controller
{
/*private function getPosts()
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
    }*/
// function index for 
    function index(){
        $posts=posts::paginate(10);
        return view("posts",['posts'=>$posts]);
    }    
    function show($id){
        $posts=posts::findOrFail($id);
        return view("show",['post'=>$posts]);
    }
    function create(){
        return view("Posts.create");
    }
    function store(){
        $posts=new posts();
        request()->validate([
            "title"=>"required",
            "content"=>"required",
            "author"=>"required"
        ]);
        $posts->title=request("title");
        $posts->content=request("content");
        $posts->author=request("author");
        $posts->save();
        return redirect("/posts");
    }
    function edit($id){
        $posts=posts::findOrFail($id);
        return view("Posts.edit",['post'=>$posts]);
    }
    function update($id){
        request()->validate([
            "title"=>"required",
            "content"=>"required",
            "author"=>"required"
        ]);
        $posts=posts::findOrFail($id);
        $posts->title=request("title");
        $posts->content=request("content");
        $posts->author=request("author");
        $posts->save();
        return redirect("/posts");
    }
    function delete($id){
        $posts=posts::findOrFail($id);
        $posts->delete();
        return redirect("/posts");
    }
    function deleted(){
        $posts=posts::onlyTrashed()->get();
        return view("deleted",['posts'=>$posts]);
    }
    function restore($id){
        $posts=posts::onlyTrashed()->findOrFail($id);
        $posts->restore();
        return redirect("/posts");
    }
    function forceDelete($id){
        $posts=posts::onlyTrashed()->findOrFail($id);
        $posts->forceDelete();
        return redirect("/posts");
    }
}