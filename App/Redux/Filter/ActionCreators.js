import ActionTypes from './ActionTypes';

export const fetchPopularMoviesRequested = () => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REQUESTED
});

export const fetchPopularMoviesFulfilled = (movies) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED,
  payload: movies
});

export const fetchPopularMoviesRejected = (err) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_REJECTED,
  payload: err
});

export default {
  fetchPopularMoviesRequested,
  fetchPopularMoviesFulfilled,
  fetchPopularMoviesRejected
};
