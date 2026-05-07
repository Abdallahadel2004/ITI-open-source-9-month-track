import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../companents/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { StartLoading } from "../../Redux/Actions/loadAction";
import "./movieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const loading = useSelector(state => state.Loading.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartLoading(true));
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e4c0d02dc6d20c10d058b163c4c6b9d`)
      .then((data) => {
        setMovie(data.data);
        dispatch(StartLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(StartLoading(false));
      });
  }, [id]);

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
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
