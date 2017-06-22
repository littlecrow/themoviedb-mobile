import ActionTypes from './ActionTypes';

export const KEY = 'movie';

export const INITIAL_STATE = {
  current: {}
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.FETCH_MOVIE_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_FULFILLED:
    return {
      ...state,
      current: action.payload
    };
  case ActionTypes.FETCH_MOVIE_REJECTED:
    return {
      ...state
    };
  default:
    return state;
  }
};
