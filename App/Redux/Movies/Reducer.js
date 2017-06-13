import Action from './Action';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch(action.type) {
  case Action.MOVIES_FETCH:
    return {
      ...state
    };
  case Action.MOVIES_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload
    };
  case Action.MOVIES_FETCH_REJECTED:
    return {
      ...state
    };
  case Action.MOVIES_FETCH_CANCEL:
    return {
      ...state
    };
  default:
    return state;
  }
};
