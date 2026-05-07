import {combineReducers} from "redux";
import FavReducer from "./FavReducer";
import loadReducer from "./loadReducer";
export default combineReducers({
    fav:FavReducer,
    Loading:loadReducer
})