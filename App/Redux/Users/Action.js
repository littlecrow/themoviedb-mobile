
// unique key namespace used by combineReducers.
// By convention it will match the directory structure to
// make it easy to locate the src.
// Also action types will prefix with the capitalized version
export const KEY = 'users';

// action type constants
export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCH_CANCEL = 'USERS_FETCH_CANCEL';
export const USERS_FETCH_FULFILLED = 'USERS_FETCH_FULFILLED';
export const USERS_FETCH_REJECTED = 'USERS_FETCH_REJECTED';

export default {
  KEY,
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED
};
