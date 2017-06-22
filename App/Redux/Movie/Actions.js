import axios from 'axios';
import ActionCreators from './ActionCreators';

const API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '62262a23488ef8c1405c686f66e765ef';
const LANGUAGE = 'en-US';

const handleAPI = (movieId) => async (dispatch) => {
  dispatch(ActionCreators.movieFetchRequested());
  try {
    const movies = await axios.get(API + movieId, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.movieFetchFulfilled(movies));
  } catch (err) {
    return dispatch(ActionCreators.movieFetchRejected(err));
  }
};

export const fetchMovies = (movieId) => {
  return handleAPI(movieId);
};

export default {
  fetchMovies
};
