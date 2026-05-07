const INTIAL_VALUE={
    fav_movies:[],
    fav_count:0
}
const FavReducer=(state=INTIAL_VALUE ,action)=>{
   switch(action.type){
    case"Add_Fav":
    return{
        ...state,
        fav_movies:[...state.fav_movies,action.payload],
        fav_count:state.fav_count +1
    }
    case"Remove_Fav":
    return{
        ...state,
        fav_movies: state.fav_movies.filter((movie) => movie.id !== action.payload.id),
        fav_count: state.fav_count - 1
    }
    default:
    return state;
   }
}

export default FavReducer;
