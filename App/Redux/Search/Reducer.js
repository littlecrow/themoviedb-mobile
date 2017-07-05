import ActionTypes from './ActionTypes';

export const KEY = 'search';
export const INITIAL_STATE = {
  keyword: '',
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.SET_KEYWORD:
    return {
      ...state,
      keyword: action.payload
    };
  case ActionTypes.FETCH_SEARCH_RESULT_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_SEARCH_RESULT_FULFILLED:
    return {
      ...state,
      list: action.payload
    };
  case ActionTypes.FETCH_SEARCH_RESULT_REJECTED:
    return {
      ...state
    };
  }
};
