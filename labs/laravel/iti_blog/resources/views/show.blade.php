@extends('navebar')

@section('content')
<article class="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0]">
  <div class="bg-yellow-300 p-3">
    <div class="flex items-center justify-between">
      <strong class="text-xs/none font-bold uppercase"><span class="font-bold">Author:&nbsp;</span>{{ $post['author'] }}</strong>

      <div class="flex gap-1">
        <div class="size-3 border-2 border-black bg-white"></div>
        <div class="size-3 border-2 border-black bg-white"></div>
      </div>
    </div>
  </div>

  <div class="border-t-2 border-black p-4 sm:p-6">
    <h3 class="text-lg font-semibold text-black"><span class="font-bold">Title:&nbsp;</span>{{ $post['title'] }}</h3>

    <p class="mt-2 text-sm text-pretty">
    <span class="font-bold">Content:&nbsp;</span>{{ $post['content'] }}
    </p>
    <p class="mt-2 text-sm text-pretty">
    <span class="font-bold">Created_At:&nbsp;</span>{{ $post->created_at->diffForHumans() }}
    </p>
  </div>
  <div class="border-t-2 border-black p-4 sm:p-6">
    <a href="/posts" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 transition">
        Back to Posts
    </a>
  </div>
</article>
@endsection
