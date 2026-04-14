@extends('navebar')
@section('content')
<style>
    .carousel-item img {
        height: 600px;
        object-fit: cover;
    }
</style>

<div class="container">
    <div id="carouselExample" class="carousel carousel-dark slide shadow rounded overflow-hidden">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="{{ asset('camp-nou-stadium-night-view-am5y1v6pkm1gad4m.jpg') }}" class="d-block w-100" alt="Camp Nou">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 text-white rounded">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="{{ asset('1330828.jpg') }}" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 text-white rounded">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="{{ asset('camp-nou-stadium-night-view-am5y1v6pkm1gad4m.jpg') }}" class="d-block w-100" alt="Camp Nou">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 text-white rounded">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>
@endsection