import { combineReducers } from 'redux';
import { MoviesReducer, MOVIES_KEY } from './Movies';
import { NavigationReducer, NAVIGATION_KEY } from './Navigation';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [MOVIES_KEY]: MoviesReducer,
  [NAVIGATION_KEY]: NavigationReducer
});
