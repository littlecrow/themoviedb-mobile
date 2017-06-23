import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './RootReducer';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunkMiddleware, logger);

export const getStore = () => (
  createStore(rootReducer, middleware)
);

export default {
  getStore
};
