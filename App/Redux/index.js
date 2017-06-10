import { combineReducers } from 'redux';
import configureStore from './ConfigureStore';
import RootLogic from './RootLogic';
import Users from './Users';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    [Users.KEY]: Users.Reducer
  });

  return configureStore(rootReducer, RootLogic);
};
