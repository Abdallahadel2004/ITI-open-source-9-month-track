import axiosInstance from '../../axios_interceptor/interceptor';

export const getMovies = (query = '', page = 1, lang = 'en') => async (dispatch) => {
  try {
    let url = query ? '/search/movie' : '/movie/popular';
    let params = { page, language: lang };
    if (query) {
      params.query = query;
    }

    const response = await axiosInstance.get(url, { params });
    
    dispatch({
      type: 'GET_MOVIES_SUCCESS',
      payload: response.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};
