import axios from 'axios';
import store from '../Redux/Store';
import { StartLoading } from '../Redux/Actions/loadAction';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

axiosInstance.interceptors.request.use(
  (config) => {

    config.params = {
      ...config.params,
      api_key: '4e4c0d02dc6d20c10d058b163c4c6b9d',
    };

    store.dispatch(StartLoading(true));
    
    return config;
  },
  (error) => {
    store.dispatch(StartLoading(false));
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {

    store.dispatch(StartLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(StartLoading(false));
    return Promise.reject(error);
  }
);

export default axiosInstance;
