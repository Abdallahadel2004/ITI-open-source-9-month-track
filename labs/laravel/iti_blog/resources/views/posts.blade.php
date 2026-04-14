@extends('navebar')

@section('content')
<div class="container mt-4">
    <h2 class="fw-bold mb-4" style="color: #1a202c;">All Posts</h2>
    
    <div class="table-responsive">
        <table class="table align-middle">
            <thead>
                <tr style="border-bottom: 2px solid #edf2f7;">
                    <th scope="col" class="border-0 pb-3">Title</th>
                    <th scope="col" class="border-0 pb-3">Description</th>
                    <th scope="col" class="border-0 pb-3">View</th>
                </tr>
            </thead>
            <tbody>
@foreach ($posts as $post)
        <tr>
                    <td class="py-3 text-dark fw-medium">{{ $post['title'] }}</td>
                    <td class="py-3 text-secondary">{{ $post['content'] }}</td>
                    <td class="py-3">
                        <a href="/posts/{{ $post['title'] }}" class="btn btn-sm" style="background-color: #5a4fcf; color: white; border-radius: 4px; padding: 5px 15px;">Show</a>
                    </td>
      </tr>
 @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection