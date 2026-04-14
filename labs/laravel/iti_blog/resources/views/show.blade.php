@extends('navebar')

@section('content')
<div class="container mt-5">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">{{ $post['title'] }}</h3>
        </div>
        <div class="card-body">
            <h5 class="card-title text-muted mb-4">Written by: {{ $post['author'] }}</h5>
            <p class="card-text fs-5" style="line-height: 1.8;">
                {{ $post['content'] }}
            </p>
        </div>
        <div class="card-footer bg-white border-0 pb-4 text-end">
            <a href="/posts" class="btn btn-secondary px-4">Back to Posts</a>
        </div>
    </div>
</div>
@endsection
