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

export default {
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfilled,
  moviesFetchRejected
};
