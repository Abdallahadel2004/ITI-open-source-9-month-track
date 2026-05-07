import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../../companents/search";
import Card from "../../companents/card";
import Spinner from "../../companents/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { StartLoading } from "../../Redux/Actions/loadAction";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const loading = useSelector(state => state.Loading.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartLoading(true));
    let url = query 
      ? `https://api.themoviedb.org/3/search/movie?api_key=4e4c0d02dc6d20c10d058b163c4c6b9d&query=${query}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=4e4c0d02dc6d20c10d058b163c4c6b9d&page=${page}`;

    axios.get(url)
      .then((data) => {
        setMovies(data.data.results);
        dispatch(StartLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(StartLoading(false));
      });
  }, [page, query]);

  const handleSearch = (searchString) => {
    setQuery(searchString);
    setPage(1);
  };

  return (
    <div className="movies-page">
      <h1 className="movies-title">Movies</h1>
      
      <Search onSearch={handleSearch} />

      {loading ? (
        <div className="loading"><Spinner /></div>
      ) : (
      <>
        <div className="movies-list">
            {movies.map((movie) => {
              return (
                <Card key={movie.id} movie={movie} />
              );
            })}
          </div>

        <div className="pagination">
            <button 
              disabled={page === 1} 
              onClick={() => setPage(page - 1)}
              className="pagination-btn"
            >
              Previous
            </button>
            <span className="pagination-info">Page {page}</span>
            <button 
              onClick={() => setPage(page + 1)}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;