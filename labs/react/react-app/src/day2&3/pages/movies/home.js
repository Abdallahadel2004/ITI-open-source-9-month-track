import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../../companents/search";
import Card from "../../companents/card";
import Spinner from "../../companents/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../Redux/Actions/moviesAction";
import { LanguageContext } from "../../context/LanguageContext";
import "./home.css";

function Home() {
  const movies = useSelector(state => state.movies.moviesList);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const loading = useSelector(state => state.Loading.loader);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    dispatch(getMovies(query, page, language));
  }, [page, query, language, dispatch]);

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