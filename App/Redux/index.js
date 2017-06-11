import { combineReducers } from 'redux';
import configureStore from './ConfigureStore';
import RootLogic from './RootLogic';
import Users from './Users';
import Movies from './Movies';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    [Users.KEY]: Users.Reducer,
    [Movies.KEY]: Movies.Reducer
  });

  return configureStore(rootReducer, RootLogic);
};
