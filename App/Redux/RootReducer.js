import { combineReducers } from 'redux';
import { NavigationReducer, NAVIGATION_KEY } from './Navigation';
import { MoviesReducer, MOVIES_KEY } from './Movies';
import { MovieReducer, MOVIE_KEY } from './Movie';
import { ListReducer, LIST_KEY } from './List';


/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [NAVIGATION_KEY]: NavigationReducer,
  [MOVIES_KEY]: MoviesReducer,
  [MOVIE_KEY]: MovieReducer,
  [LIST_KEY]: ListReducer
});
