import { combineReducers } from 'redux';
import Users from './Users';
import Movies from './Movies';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [Users.KEY]: Users.Reducer,
  [Movies.KEY]: Movies.Reducer
});
