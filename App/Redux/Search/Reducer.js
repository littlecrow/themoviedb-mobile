import ActionTypes from './ActionTypes';

export const KEY = 'search';
export const INITIAL_STATE = {
  list: [],
  loading: false,
  isSearching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.IS_SEARCHING:
    return {
      ...state,
      isSearching: action.payload
    };
  case ActionTypes.FETCH_SEARCH_MOVIE_REQUESTED:
    return {
      ...state,
      loading: true
    };
  case ActionTypes.FETCH_SEARCH_MOVIE_FULFILLED:
    return {
      ...state,
      list: action.payload,
      loading: false,
      isSearching: false
    };
  case ActionTypes.FETCH_SEARCH_MOVIE_REJECTED:
    return {
      ...state,
      loading: true
    };
  case ActionTypes.EMPTY_SEARCH_MOVIES:
    return {
      ...state,
      list: []
    };
  default:
    return state;
  }
};
