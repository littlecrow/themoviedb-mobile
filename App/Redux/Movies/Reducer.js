import Action from './Action';

const initialState = {
  list: [],
  fetchStatus: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
  case Action.MOVIES_FETCH:
    return {
      ...state,
      fetchStatus: 'Fetched'
    };
  case Action.MOVIES_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload,
      fetchStatus: 'Fetch Fulfilled'
    };
  case Action.MOVIES_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: 'Fetch rejected'
    };
  case Action.MOVIES_FETCH_CANCEL:
    return {
      ...state,
      fetchStatus: 'Fetch Canceled'
    };
  default:
    return state;
  }
};
