import ActionTypes from './ActionTypes';
import { NavigationActionTypes } from '../Navigation';
export const KEY = 'movie';

export const INITIAL_STATE = {
  current: {
    detail: null,
    credits: null,
    reviews: null
  },
  prev: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.FETCH_MOVIE_DETAIL_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_DETAIL_FULFILLED:
    return {
      ...state,
      current: {
        ...state.current,
        detail: action.payload
      }
    };
  case ActionTypes.FETCH_MOVIE_DETAIL_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_CREDITS_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_CREDITS_FULFILLED:
    return {
      ...state,
      current: {
        ...state.current,
        credits: action.payload
      }
    };
  case ActionTypes.FETCH_MOVIE_CREDITS_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_REVIEWS_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_MOVIE_REVIEWS_FULFILLED:
    return {
      ...state,
      current: {
        ...state.current,
        reviews: action.payload
      }
    };
  case ActionTypes.FETCH_MOVIE_REVIEWS_REJECTED:
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
