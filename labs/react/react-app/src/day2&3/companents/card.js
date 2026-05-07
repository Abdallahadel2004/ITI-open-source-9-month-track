import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FavMovie, RemoveFavMovie } from "../Redux/Actions/FavAction";

function Card({ movie }) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.fav_movies);
  const isFav = favs.some((fav) => fav.id === movie.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (isFav) {
      dispatch(RemoveFavMovie(movie));
    } else {
      dispatch(FavMovie(movie));
    }
  };

  return (
    <Link to={"/movie/" + movie.id} style={{ textDecoration: "none" }}>
      <div className="movie-card" style={{ position: 'relative' }}>
        <button 
          onClick={toggleFavorite} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            padding: '5px 10px',
            zIndex: 10
          }}
        >
          {isFav ? <i className="fa-solid fa-heart" style={{ color: '#e22e16ff' }}></i> : <i className="fa-regular fa-heart" style={{ color: 'white' }}></i>}
        </button>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="movie-rating"><i className="fa-solid fa-star" style={{ color: '#f5c518', marginRight: '5px' }}></i>{movie.vote_average}</div>
          <div className="movie-date">Date: {movie.release_date}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
