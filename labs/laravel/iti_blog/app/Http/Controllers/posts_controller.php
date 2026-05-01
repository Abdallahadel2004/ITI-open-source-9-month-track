<?php
namespace App\Http\Controllers;
use App\Models\posts;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;

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
        Gate::authorize('is-admin');
        return view("Posts.create");
    }
    function store(StorePostRequest $request){
        Gate::authorize('is-admin');

        $posts=new posts();
        $posts->title=$request->input('title');
        $posts->content=$request->input('content');
        $posts->author=$request->input('author');


        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('posts', 'public');
            $posts->image = $path;
        }

        $posts->save();

        if ($request->filled('tags')) {
            $tags = array_map('trim', explode(',', $request->input('tags')));
            $posts->attachTags($tags);
        }

        return redirect("/posts");
    }
    function edit($id){
        $posts=posts::findOrFail($id);

        $this->authorize('update', $posts);
        return view("Posts.edit",['post'=>$posts]);
    }
    function update(UpdatePostRequest $request, $id){
        $posts=posts::findOrFail($id);
        $this->authorize('update', $posts);


        if ($request->hasFile('image')) {
            if ($posts->image) {
                Storage::disk('public')->delete($posts->image);
            }
            $path = $request->file('image')->store('posts', 'public');
            $posts->image = $path;
        }

        $posts->title=$request->input('title');
        $posts->content=$request->input('content');
        $posts->author=$request->input('author');
        $posts->save();

        if ($request->has('tags')) {
            $tags = array_filter(array_map('trim', explode(',', $request->input('tags'))));
            $posts->syncTags($tags);
        }

        return redirect("/posts");
    }
    function delete($id){
        $posts=posts::findOrFail($id);

        $this->authorize('delete', $posts);
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


        if ($posts->image) {
            Storage::disk('public')->delete($posts->image);
        }

        $posts->forceDelete();
        return redirect("/posts");
    }
}