import ActionTypes from './ActionTypes';

export const moviesFetchRequested = () => ({
  type: ActionTypes.FETCH_MOVIES_REQUESTED
});

export const moviesFetchFulfilled = (movies) => ({
  type: ActionTypes.FETCH_MOVIES_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIES_REJECTED,
  payload: err,
  error: true
});

export const setPage = (page) => ({
  type: ActionTypes.SET_PAGE_NUM,
  page
});

export const setFilter = (filter) => ({
  type: ActionTypes.SET_FILTER,
  filter
});

export default {
  moviesFetchRequested,
  moviesFetchFulfilled,
  moviesFetchRejected,
  setPage,
  setFilter
};
