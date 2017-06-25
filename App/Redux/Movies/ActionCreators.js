import ActionTypes from './ActionTypes';

export const moviesFetchRequested = () => ({
  type: ActionTypes.FETCH_MOVIES_REQUESTED
});

export const popularMoviesFetchFulfilled = (movies) => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED,
  payload: movies
});

export const topRatedMoviesFetchFulfilled = (movies) => ({
  type: ActionTypes.FETCH_TOP_RATED_MOVIES_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const setPageToPopular = (page) => ({
  type: ActionTypes.SET_POPULAR_PAGE,
  page
});

export const setPageToTopRated = (page) => ({
  type: ActionTypes.SET_TOP_RATED_PAGE,
  page
});

export const setFilter = (filter) => ({
  type: ActionTypes.SET_FILTER,
  filter
});

export default {
  moviesFetchRequested,
  popularMoviesFetchFulfilled,
  topRatedMoviesFetchFulfilled,
  moviesFetchRejected,
  setPageToPopular,
  setPageToTopRated
};
