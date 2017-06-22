import ActionTypes from './ActionTypes';
import { NavigationActionTypes } from '../Navigation';
export const KEY = 'movie';

export const INITIAL_STATE = {
  current: null,
  prev: null
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
      prev: state.current,
      current: action.payload
    };
  case ActionTypes.FETCH_MOVIE_REJECTED:
    return {
      ...state
    };
  case NavigationActionTypes.NAVIGATE_BACK:
    return {
      ...state,
      prev: state.current,
      current: INITIAL_STATE.current
    };
  default:
    return state;
  }
};
