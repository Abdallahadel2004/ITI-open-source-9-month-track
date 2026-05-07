import {createStore} from "redux";
import CombineReducer from "./Reducers/CombineReducers";

const store=createStore(CombineReducer);

export default store;