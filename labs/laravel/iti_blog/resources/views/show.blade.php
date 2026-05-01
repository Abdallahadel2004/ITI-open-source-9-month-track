@extends('navebar')

@section('content')
<article class="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0]">
  <div class="bg-yellow-300 p-3">
    <div class="flex items-center justify-between">
      <strong class="text-xs/none font-bold uppercase"><span class="font-bold">Author:&nbsp;</span>{{ optional($post->user)->name ?? $post['author'] }}</strong>

      <div class="flex gap-1">
        <div class="size-3 border-2 border-black bg-white"></div>
        <div class="size-3 border-2 border-black bg-white"></div>
      </div>
    </div>
  </div>

  <div class="border-t-2 border-black p-4 sm:p-6">
    <h3 class="text-lg font-semibold text-black"><span class="font-bold">Title:&nbsp;</span>{{ $post['title'] }}</h3>

    @if($post->image)
    <div class="mt-4">
      <img src="{{ Storage::url($post->image) }}" alt="{{ $post->title }}" class="w-full max-w-lg rounded-md border-2 border-black shadow-sm">
    </div>
    @endif

    <p class="mt-2 text-sm text-pretty">
    <span class="font-bold">Content:&nbsp;</span>{{ $post['content'] }}
    </p>
    <p class="mt-2 text-sm text-pretty">
    <span class="font-bold">Created_At:&nbsp;</span>{{ $post->created_at->diffForHumans() }}
    </p>

    @if($post->tags->count() > 0)
    <div class="mt-4">
      <span class="font-bold text-sm">Tags:&nbsp;</span>
      @foreach($post->tags as $tag)
          <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">{{ $tag->name }}</span>
      @endforeach
    </div>
    @endif
  </div>

  <div class="border-t-2 border-black p-4 sm:p-6 bg-gray-50">
    <h4 class="text-md font-bold text-black mb-4">Comments</h4>
    
    @forelse($post->comments as $comment)
        <div class="mb-4 p-3 bg-white border border-gray-200 rounded shadow-sm">
            <div class="flex items-center justify-between">
                <p class="text-xs font-bold text-gray-800 mb-1">{{ optional($comment->user)->name ?? 'Unknown User' }} commented:</p>
                @can('is-admin')
                <form action="/comments/{{ $comment->id }}" method="POST" onsubmit="return confirm('Delete this comment?')">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="text-xs text-red-600 font-bold hover:text-red-800">Delete</button>
                </form>
                @endcan
            </div>
            <p class="text-sm text-gray-700">{{ $comment->body }}</p>
        </div>
    @empty
        <p class="text-sm text-gray-500 mb-4">No comments yet.</p>
    @endforelse

    @auth
        <form action="/posts/{{ $post->id }}/comments" method="POST" class="mt-4">
            @csrf
            <textarea name="body" rows="3" class="w-full border border-gray-300 rounded p-2 mb-2 text-sm" placeholder="Add a comment..." required></textarea>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 text-xs font-bold rounded hover:bg-blue-700 transition">Post Comment</button>
        </form>
    @else
        <p class="text-sm text-red-600 mt-4 font-semibold">You must be logged in to post a comment.</p>
    @endauth
  </div>
  <div class="border-t-2 border-black p-4 sm:p-6">
    <a href="/posts" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 transition">
        Back to Posts
    </a>
  </div>
</article>
@endsection
