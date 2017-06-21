import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './RootReducer';

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = () => (
  createStore(rootReducer, middleware)
);

export default {
  getStore
};
