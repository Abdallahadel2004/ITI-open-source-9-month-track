import {combineReducers} from "redux";
import FavReducer from "./FavReducer";
import loadReducer from "./loadReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    fav:FavReducer,
    Loading:loadReducer,
    movies:moviesReducer
})