import Action from './Action';

export const moviesFetch = () => ({
  type: Action.MOVIES_FETCH
});

export const moviesFetchCancel = () => ({
  type: Action.MOVIES_FETCH_CANCEL
});

export const moviesFetchFulfilled = (movies) => ({
  type: Action.MOVIES_FETCH_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = (err) => ({
  type: Action.MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});

export const setPage = (page) => ({
  type: Action.SET_PAGE_NUM,
  page
});

export const setFilter = (filter) => ({
  type: Action.SET_FILTER,
  filter
});

export default {
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfilled,
  moviesFetchRejected,
  setPage,
  setFilter
};
