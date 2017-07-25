import { combineReducers } from 'redux';
import { MoviesReducer, MOVIES_KEY } from './Movies';
import { MovieReducer, MOVIE_KEY } from './Movie';
import { TVShowsReducer, TV_SHOWS_KEY } from './TVShows';
import { TVShowReducer, TV_SHOW_KEY } from './TVShow';
import { PeopleReducer, PEOPLE_KEY } from './People';
import { ListReducer, LIST_KEY } from './List';
import { SearchReducer, SEARCH_KEY } from './Search';
import { NavigationReducer, NAVIGATION_KEY } from './Navigation';


/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [MOVIES_KEY]: MoviesReducer,
  [MOVIE_KEY]: MovieReducer,
  [TV_SHOWS_KEY]: TVShowsReducer,
  [TV_SHOW_KEY]: TVShowReducer,
  [PEOPLE_KEY]: PeopleReducer,
  [LIST_KEY]: ListReducer,
  [SEARCH_KEY]: SearchReducer,
  [NAVIGATION_KEY]: NavigationReducer
});
