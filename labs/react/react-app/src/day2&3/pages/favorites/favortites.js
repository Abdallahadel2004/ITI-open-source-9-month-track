import { useSelector } from "react-redux";
import Card from "../../companents/card";
import "../movies/home.css"; 
import "./fav.css";

function Favorites(){
    const fav_movies = useSelector((state) => state.fav.fav_movies);
    return(
        <div className="movies-page">
            <h1 className="movies-title">
                <i className="fa-solid fa-star"></i> My Favorite Movies
            </h1>
            
            {fav_movies.length === 0 ? (
                <div className="empty-state">
                    <i className="fa-regular fa-folder-open"></i>
                    <p>You have no favorite movies yet. Go back to home and add some!</p>
                </div>
            ) : (
                <div className="movies-list">
                    {fav_movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Favorites;