import { combineReducers } from 'redux';
import Users from './Users';
import { MoviesReducer, MOVIES_KEY } from './Movies';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [Users.KEY]: Users.Reducer,
  [MOVIES_KEY]: MoviesReducer
});
