import { combineReducers } from 'redux';
import { MoviesReducer, MOVIES_KEY } from './Movies';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [MOVIES_KEY]: MoviesReducer
});
