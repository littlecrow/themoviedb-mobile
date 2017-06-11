import { combineReducers } from 'redux';
import Users from './Users';

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [Users.KEY]: Users.Reducer
});
