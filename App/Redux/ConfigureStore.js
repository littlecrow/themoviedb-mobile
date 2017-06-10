import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

const deps = { // injected dependencies for logic
  http: axios
};

export default (rootReducer, rootLogic) => {

  const logicMiddleware = createLogicMiddleware(rootLogic, deps);

  const middleware = applyMiddleware(
    logicMiddleware
  );

  const store = createStore(rootReducer, middleware);
  return store;
};
