import ActionTypes from './ActionTypes';

export const fetchPopularMoviesRequested = () => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REQUESTED
});

export const fetchTopRatedMoviesRequested = () => ({
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_REQUESTED
});

export const fetchPopularMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED,
  payload: movies
});

export const fetchTopRatedMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_FULFILLED,
  payload: movies
});

export const fetchPopularMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const fetchTopRatedMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_REJECTED,
  payload: err,
  error: true
});

export default {
  fetchPopularMoviesRequested,
  fetchPopularMoviesFulfilled,
  fetchPopularMoviesRejected,

  fetchTopRatedMoviesRequested,
  fetchTopRatedMoviesFulfilled,
  fetchTopRatedMoviesRejected
};
