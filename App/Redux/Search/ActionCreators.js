import ActionTypes from './ActionTypes';

export const setKeyword = (keyword) => ({
  type: ActionTypes.SET_KEYWORD,
  payload: keyword
});

export const fetchSearchResultRequested = () => ({
  type: ActionTypes.FETCH_SEARCH_RESULT_REQUESTED
});

export const fetchSearchResultFulfilled = (movies) => ({
  type: ActionTypes.FETCH_SEARCH_RESULT_FULFILLED,
  payload: movies
});

export const fetchSearchResultRejected = (err) => ({
  type: ActionTypes.FETCH_SEARCH_RESULT_REJECTED,
  payload: err
});

export default {
  setKeyword,
  fetchSearchResultRequested,
  fetchSearchResultFulfilled,
  fetchSearchResultRejected
};
