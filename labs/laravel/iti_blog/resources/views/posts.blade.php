@extends('navebar')

@section('content')
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div class="sm:flex sm:items-center sm:justify-between mb-6">
            <div class="text-center sm:text-left">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">All Posts</h1>
                @can('is-admin')
                <a href="/posts/create" class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700 transition">
                    Create Post
                </a>
                @endcan
                <span>
                    <a href="/posts/deleted" class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 transition">
                        show delted posts
                    </a>
                </span>

                <p class="mt-1.5 text-sm text-gray-500">View and manage your recent blog posts.</p>
            </div>
        </div>

        <div class="rounded-lg border border-gray-200 shadow-sm">
            <div class="overflow-x-auto rounded-t-lg">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Image</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Title</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Slug</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Tags</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">Description</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-right">View</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-right">Edit</th>
                            <th class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-right">Delete</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        @foreach ($posts as $post)
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-3">
                                    @if($post->image)
                                        <img src="{{ Storage::url($post->image) }}" alt="{{ $post->title }}" class="w-16 h-16 object-cover rounded">
                                    @else
                                        <span class="text-xs text-gray-400">No image</span>
                                    @endif
                                </td>
                                <td class="px-4 py-3 font-medium text-gray-900 break-words">{{ $post['title'] }}</td>
                                <td class="px-4 py-3 text-gray-500 break-all">{{ $post['slug'] }}</td>
                                <td class="px-4 py-3 text-gray-500">
                                    <div class="flex flex-wrap gap-1">
                                        @foreach($post->tags as $tag)
                                            <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{{ $tag->name }}</span>
                                        @endforeach
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-gray-700 min-w-[200px]">{{ $post['content'] }}</td>
                                <td class="whitespace-nowrap px-4 py-3 text-right space-x-2">
                                    <a href="/posts/{{ $post['id'] }}"
                                        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 transition">
                                            Show
                                        </a>
                                </td>
                                <td class="edit px-4 py-3 text-right space-x-2">
                                    @can('update', $post)
                                    <a href="/posts/{{ $post['id'] }}/edit"
                                        class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700 transition">
                                            Edit
                                        </a>
                                    @endcan
                                </td>
                                <td class="danger px-4 py-3 text-right space-x-2">
                                    @can('delete', $post)
                                    <a  onclick="return confirm('Are you sure you want to delete this post?')" href="/posts/{{ $post['id'] }}/delete"
                                        class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 transition">
                                            Delete
                                        </a>
                                    @endcan
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <div class="mt-6">
            {{ $posts->links() }}
        </div>
    </div>
@endsection