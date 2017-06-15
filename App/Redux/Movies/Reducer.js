import Action from './Action';

const initialState = {
  list: [],
  page: 1
};

export default (state = initialState, action) => {
  switch(action.type) {
  case Action.MOVIES_FETCH:
    return {
      ...state
    };
  case Action.MOVIES_FETCH_FULFILLED: {
    return {
      ...state,
      list: [
        ...state.list,
        ...action.payload
      ]
    };
  }
  case Action.MOVIES_FETCH_REJECTED:
    return {
      ...state
    };
  case Action.MOVIES_FETCH_CANCEL:
    return {
      ...state
    };
  case Action.SET_PAGE_NUM:
    return {
      ...state,
      page: action.page
    };
  default:
    return state;
  }
};
