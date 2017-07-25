import ActionTypes from './ActionTypes';

export const getPopularMovieBackdrops = (backdrops) => ({
  type: ActionTypes.GET_POPULAR_MOVIE_BACKDROPS,
  payload: backdrops
});

export const fetchPopularMoviesRequested = () => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REQUESTED
});

export const fetchPopularMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED,
  payload: movies
});

export const fetchPopularMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const fetchTopVotedMoviesRequested = () => ({
  type: ActionTypes.FETCH_TOP_VOTED_MOVIES_REQUESTED
});

export const fetchTopVotedMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_TOP_VOTED_MOVIES_FULFILLED,
  payload: movies
});

export const fetchTopVotedMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_TOP_VOTED_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const fetchTopRevenueMoviesRequested = () => ({
  type: ActionTypes.FETCH_TOP_REVENUE_MOVIES_REQUESTED
});

export const fetchTopRevenueMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_TOP_REVENUE_MOVIES_FULFILLED,
  payload: movies
});

export const fetchTopRevenueMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_TOP_REVENUE_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const emptyMovies = () => ({
  type: ActionTypes.EMPTY_MOVIES
});

export default {
  getPopularMovieBackdrops,

  fetchPopularMoviesRequested,
  fetchPopularMoviesFulfilled,
  fetchPopularMoviesRejected,

  fetchTopVotedMoviesRequested,
  fetchTopVotedMoviesFulfilled,
  fetchTopVotedMoviesRejected,

  fetchTopRevenueMoviesRequested,
  fetchTopRevenueMoviesFulfilled,
  fetchTopRevenueMoviesRejected,

  emptyMovies
};
