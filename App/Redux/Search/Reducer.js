import ActionTypes from './ActionTypes';

export const KEY = 'search';
export const INITIAL_STATE = {
  keyword: '',
  page: 1,
  list: [],
  loading: false,
  isSearching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.CHECK_IS_SEARCHING:
    return {
      ...state,
      isSearching: action.payload
    };
  case ActionTypes.SET_KEYWORD:
    return {
      ...state,
      keyword: action.payload
    };
  case ActionTypes.FETCH_SEARCHING_REQUESTED:
    return {
      ...state,
      keyword: action.payload || state.keyword, // for NULL or UNDEFINED
      loading: state.page === 1 ? true : false
    };
  case ActionTypes.FETCH_SEARCHING_FULFILLED:
    return {
      ...state,
      page: state.page + 1,
      list: [
        ...state.list,
        ...action.payload
      ],
      loading: false,
      isSearching: false
    };
  case ActionTypes.FETCH_SEARCHING_REJECTED:
    return {
      ...state,
      loading: true
    };
  case ActionTypes.RESET_SEARCHING:
    return {
      ...state,
      list: INITIAL_STATE.list
    };
  case ActionTypes.RESET_PAGE:
    return {
      ...state,
      page: INITIAL_STATE.page,
      list: INITIAL_STATE.list
    };
  default:
    return state;
  }
};
