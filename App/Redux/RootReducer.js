import { combineReducers } from 'redux';
import { MoviesReducer, MOVIES_KEY } from './Movies';
import { MovieReducer, MOVIE_KEY } from './Movie';
import { ListReducer, LIST_KEY } from './List';
import { NavigationReducer, NAVIGATION_KEY } from './Navigation';


/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [MOVIES_KEY]: MoviesReducer,
  [MOVIE_KEY]: MovieReducer,
  [LIST_KEY]: ListReducer,
  [NAVIGATION_KEY]: NavigationReducer
});
