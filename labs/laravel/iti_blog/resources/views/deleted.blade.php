@extends('navebar')

@section('content')
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div class="sm:flex sm:items-center sm:justify-between mb-6">
            <div class="text-center sm:text-left">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Deleted Posts</h1>
                <a href="/posts" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 transition">
                    Back to All Posts
                </a>
                <p class="mt-1.5 text-sm text-gray-500">View and manage your recently deleted blog posts.</p>
            </div>
        </div>

        <div class="rounded-lg border border-gray-200 shadow-sm">
            <div class="overflow-x-auto rounded-t-lg">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Title</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Description</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Author</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-right">Restore</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-right">Force Delete</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        @foreach ($posts as $post)
                            <tr class="hover:bg-gray-50">
                                <td class="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{{ $post->title }}</td>
                                <td class="px-4 py-3 text-gray-700 min-w-[200px]">{{ $post->content }}</td>
                                <td class="whitespace-nowrap px-4 py-3 text-gray-700">{{ $post->author }}</td>
                                <td class="whitespace-nowrap px-4 py-3 text-right">
                                    <a href="/posts/{{ $post->id }}/restore"
                                        class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700 transition">
                                            Restore
                                        </a>
                                </td>
                                <td class="whitespace-nowrap px-4 py-3 text-right">
                                    <form action="/posts/{{ $post->id }}" method="POST" class="inline" onsubmit="return confirm('Are you sure you want to PERMANENTLY delete this post?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 transition">
                                                Force Delete
                                            </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        @if($posts->isEmpty())
                            <tr>
                                <td>
                                    No deleted posts found.
                                </td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
