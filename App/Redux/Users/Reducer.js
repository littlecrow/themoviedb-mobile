import {
  KEY,
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED
} from './Action';

export const selectors = {
  users: state => state[KEY].list,
  fetchStatus: state => state[KEY].fetchStatus
};

const initialState = {
  list: [],
  fetchStatus: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
  case USERS_FETCH:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      list: []
    };
  case USERS_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`
    };
  case USERS_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  case USERS_FETCH_CANCEL:
    return {
      ...state,
      fetchStatus: `user fetch cancelled at ${(new Date()).toLocaleString()}`
    };
  default:
    return state;
  }
};
