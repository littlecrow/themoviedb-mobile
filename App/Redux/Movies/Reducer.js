import ActionTypes from './ActionTypes';
import Constant from './Constant';

export const KEY = 'movies';

export const INITIAL_STATE = {
  list: [],
  page: 1,
  filter: Constant.POPULAR_MOVIES
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.FETCH_MOVIES_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIES_FULFILLED:
    return {
      ...state,
      list: [
        ...state.list,
        ...action.payload
      ]
    };
  case ActionTypes.FETCH_MOVIES_REJECTED:
    return {
      ...state
    };
  case ActionTypes.SET_PAGE_NUM:
    return {
      ...state,
      page: action.page
    };
  case ActionTypes.SET_FILTER: {
    if(state.filter !== action.filter) {
      return {
        ...state,
        list: [],
        page: 1,
        filter: action.filter
      };
    }

    return state;
  }
  default:
    return state;
  }
};
