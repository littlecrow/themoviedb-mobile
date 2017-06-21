import ActionTypes from './ActionTypes';

export const moviesFetchRequested = () => ({
  type: ActionTypes.MOVIES_FETCH_REQUESTED
});

export const moviesFetchFulfilled = (movies) => ({
  type: ActionTypes.MOVIES_FETCH_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = (err) => ({
  type: ActionTypes.MOVIES_FETCH_REJECTED,
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
