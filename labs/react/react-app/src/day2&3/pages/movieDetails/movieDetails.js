import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../axios_interceptor/interceptor";
import Spinner from "../../companents/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { FavMovie, RemoveFavMovie } from "../../Redux/Actions/FavAction";
import { LanguageContext } from "../../context/LanguageContext";
import "./movieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const loading = useSelector(state => state.Loading.loader);
  const favs = useSelector(state => state.fav.fav_movies);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  const toggleFav = () => {
    if (favs.some(fav => fav.id === movie.id)) {
      dispatch(RemoveFavMovie(movie));
    } else {
      dispatch(FavMovie(movie));
    }
  };

  useEffect(() => {
    axiosInstance.get(`/movie/${id}`, { params: { language } })
      .then((data) => {
        setMovie(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, language]);

  if (loading) {
    return <div className="loading"><Spinner /></div>;
  }

  if (!movie) {
    return <div className="loading">Movie not found</div>;
  }

  return (
    <div className="details-page">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link to="/" className="back-link">← Back to Movies</Link>
        <div className="details-content">
          <div className="details-poster">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="details-info">
            <h1>{movie.title}</h1>
            {movie.tagline && <p className="details-tagline">"{movie.tagline}"</p>}
            <div className="details-rating">⭐ {movie.vote_average} / 10</div>
            {movie.runtime && <div className="details-runtime">{movie.runtime} minutes</div>}
            <div className="details-date">{movie.release_date}</div>
            <div className="details-genres">
              {movie.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </div>
            <p className="details-overview">{movie.overview}</p>
          </div>
          <div className="details-actions">
            <button 
              className="details-fav-button"
              onClick={toggleFav}
              >
              {favs.some(fav => fav.id === movie.id) ? (
                <i className="fa-solid fa-heart" style={{ color: '#e22e16ff' }}></i>
              ) : (
                <i className="fa-regular fa-heart" style={{ color: 'white' }}></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
