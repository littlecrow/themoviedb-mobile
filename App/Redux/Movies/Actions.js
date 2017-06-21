import axios from 'axios';
import ActionCreators from './ActionCreators';
import Constant from './Constant';

const API_POPULAR = 'https://api.themoviedb.org/3/movie/popular';
const API_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated';
const API_KEY = '62262a23488ef8c1405c686f66e765ef';
const LANGUAGE = 'en-US';

const handleAPI = () => async (dispatch, getState) => {
  dispatch(ActionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(
      getState().movies.filter === Constant.POPULAR_MOVIES ? API_POPULAR : API_TOP_RATED,
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          page: getState().movies.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.moviesFetchFulfilled(movies));
  } catch (err) {
    return dispatch(ActionCreators.moviesFetchRejected(err));
  }
};

export const fetchMovies = () => {
  return handleAPI();
};

export default {
  fetchMovies
};
