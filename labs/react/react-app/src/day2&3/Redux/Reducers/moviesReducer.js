const INTIAL_VALUE = {
  moviesList: [],
};

export default function moviesReducer(state = INTIAL_VALUE, action) {
  switch (action.type) {
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}
