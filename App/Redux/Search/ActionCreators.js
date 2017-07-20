import ActionTypes from './ActionTypes';

export const checkIsSearching = (bool) => ({
  type: ActionTypes.CHECK_IS_SEARCHING,
  payload: bool
});

export const fetchSearchingRequested = (keyword) => ({
  type: ActionTypes.FETCH_SEARCHING_REQUESTED,
  payload: keyword
});

export const fetchSearchingFulfilled = (data) => ({
  type: ActionTypes.FETCH_SEARCHING_FULFILLED,
  payload: data
});

export const fetchSearchingRejected = (err) => ({
  type: ActionTypes.FETCH_SEARCHING_REJECTED,
  payload: err
});

export const resetSearching = () => ({
  type: ActionTypes.RESET_SEARCHING
});

export const resetPage = () => ({
  type: ActionTypes.RESET_PAGE
});

export default {
  checkIsSearching,
  fetchSearchingRequested,
  fetchSearchingFulfilled,
  fetchSearchingRejected,
  resetSearching,
  resetPage
};
