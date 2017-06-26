import axios from 'axios';
import { API_KEY, LANGUAGE, API_MOVIE } from 'react-native-dotenv';
import ActionCreators from './ActionCreators';

const callFetchRequested = (dispatch) => dispatch(ActionCreators.moviesFetchRequested());
const callFetchRejected = (dispatch, err) => {
  console.log('Error: ', err);
  dispatch(ActionCreators.moviesFetchRejected(err));
};

const fetchPopularMovies = () => async (dispatch, getState) => {
  callFetchRequested(dispatch);

  try {
    const movies = await axios.get(
      API_MOVIE + 'popular',
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          page: getState().movies.filter.popular.page
        }
      }).then(response => response.data.results);
    return dispatch(ActionCreators.popularMoviesFetchFulfilled(movies));
  } catch (err) {
    callFetchRejected(dispatch, err);
  }
};

const fetchTopRatedMovies = () => async (dispatch, getState) => {
  callFetchRequested(dispatch);
  try {
    const movies = await axios.get(
      API_MOVIE + 'top_rated',
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          page: getState().movies.filter.topRated.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.topRatedMoviesFetchFulfilled(movies));
  } catch (err) {
    callFetchRejected(dispatch, err);
  }
};

export default {
  fetchPopularMovies,
  fetchTopRatedMovies
};
