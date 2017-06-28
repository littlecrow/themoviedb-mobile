import axios from 'axios';
import { API_KEY, API_DISCOVER, LANGUAGE, API_MOVIE } from 'react-native-dotenv';
import ActionCreators from './ActionCreators';

const API_DISCOVER_MOVIE = API_DISCOVER + 'movie';

const fetchPopularMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchPopularMoviesRequested());
  try {
    const movies = await axios.get(
      API_DISCOVER_MOVIE,
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          sort_by: 'popularity.desc',
          page: getState().movies.filter.popular.page
        }
      }).then(response => response.data.results);
    return dispatch(ActionCreators.fetchPopularMoviesFulfilled(movies));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchPopularMoviesRejected(err));
  }
};

const fetchTopVotedMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchTopVotedMoviesRequested());
  try {
    const movies = await axios.get(
      API_DISCOVER_MOVIE,
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          sort_by: 'vote_average.desc',
          page: getState().movies.filter.topVoted.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchTopVotedMoviesFulfilled(movies));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchTopVotedMoviesRejected());
  }
};

const fetchTopRevenueMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchTopRevenueMoviesRequested());
  try {
    const movies = await axios.get(
      API_DISCOVER_MOVIE,
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          sort_by: 'revenue.desc',
          page: getState().movies.filter.topRevenue.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchTopRevenueMoviesFulfilled(movies));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchTopRevenueMoviesRejected());
  }
};

export default {
  fetchPopularMovies,
  fetchTopVotedMovies,
  fetchTopRevenueMovies
};
