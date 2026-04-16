@extends('navebar')

@section('content')
<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div class="max-w-md mx-auto">
        <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">Edit Post</h1>
     @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif      
        <form action="/posts" method="POST" class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            @csrf
            <div>
                <label class="block text-sm font-medium text-gray-700" for="title">Title</label>
                <input 
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    id="title" 
                    name="title" 
                    type="text" 
                    value="{{ old('title', $post['title']) }}"
                ><p class="text-danger"> {{$errors->first('title')  }} <p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700" for="author">Author</label>
                <input 
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    id="author" 
                    name="author" 
                    type="text" 
                    value="{{ old('author', $post['author']) }}"
                    
                ><p class="text-danger"> {{$errors->first('author')  }} </p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700" for="content">Content</label>
                <textarea 
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    id="content" 
                    name="content" 
                    rows="6" 
                >{{ old('content', $post['content']) }}</textarea>
                <p class="text-danger"> {{$errors->first('content')  }} </p>
            </div>

            <div class="flex items-center justify-end space-x-3 pt-4">
                <a href="/posts" class="text-sm font-medium text-gray-500 hover:text-gray-700 transition">Cancel</a>
                <button 
                    class="inline-block rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition" 
                    type="submit">
                    Update Post
                </button>
            </div>
        </form>
    </div>
</div>
@endsection