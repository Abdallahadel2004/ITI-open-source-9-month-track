import { StartLoading } from './loadAction';
let searchTimeout;

export const getMovies = (query = '', page = 1, lang = 'en') => (dispatch) => {
  try {
    dispatch(StartLoading(true));
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const delay = query ? 500 : 0;

    searchTimeout = setTimeout(() => {
      const xhr = new XMLHttpRequest();
      const endpoint = query ? '/search/movie' : '/movie/popular';
      const baseUrl = 'https://api.themoviedb.org/3';
      const apiKey = '4e4c0d02dc6d20c10d058b163c4c6b9d';
      
      let url = `${baseUrl}${endpoint}?api_key=${apiKey}&page=${page}&language=${lang}`;
      if (query) {
        url += `&query=${encodeURIComponent(query)}`;
      }

      xhr.open('GET', url, true);
           
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          dispatch(StartLoading(false));
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText);
              dispatch({
                type: 'GET_MOVIES_SUCCESS',
                payload: data.results,
              });
            } catch (e) {
              console.error('Failed to parse TMDB response:', e);
            }
          } else {
            console.error('XHR movie fetch failed status:', xhr.status);
          }
        }
      };
      
      xhr.send();
    }, delay);

  } catch (error) {
    console.error(error);
    dispatch(StartLoading(false));
  }
};

