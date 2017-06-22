import ActionTypes from './ActionTypes';

export const movieFetchRequested = () => ({
  type: ActionTypes.FETCH_MOVIE_REQUESTED
});

export const movieFetchFulfilled = (movie) => ({
  type: ActionTypes.FETCH_MOVIE_FULFILLED,
  payload: movie
});

export const movieFetchRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIE_REJECTED,
  payload: err,
  error: true
});

export default {
  movieFetchRequested,
  movieFetchFulfilled,
  movieFetchRejected,
};
