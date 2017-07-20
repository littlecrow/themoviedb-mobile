import ActionTypes from './ActionTypes';
export const KEY = 'tvshow';

export const INITIAL_STATE = {
  current: {
    detail: null,
    credits: null
  },
  prev: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.SET_TV_SHOW_DETAIL: {
    // Get saved movied when store request the same movie id
    if (state.prev && action.payload.id === state.prev.detail.id) {
      return {
        ...state,
        current: state.prev
      };
    }
    return {
      ...state,
      current: {
        ...state.current,
        detail: action.payload
      }
    };
  }
  case ActionTypes.EMPTY_CURRENT_TV_SHOW:
    return {
      ...state,
      prev: state.current,
      current: INITIAL_STATE.current
    };
  case ActionTypes.FETCH_TV_SHOW_DETAIL_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TV_SHOW_DETAIL_FULFILLED:
    return {
      ...state,
      current: {
        ...state.current,
        detail: action.payload
      }
    };
  case ActionTypes.FETCH_TV_SHOW_DETAIL_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TV_SHOW_CREDITS_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TV_SHOW_CREDITS_FULFILLED:
    return {
      ...state,
      current: {
        ...state.current,
        credits: action.payload
      }
    };
  case ActionTypes.FETCH_TV_SHOW_CREDITS_REJECTED:
    return {
      ...state
    };
  default:
    return state;
  }
};
