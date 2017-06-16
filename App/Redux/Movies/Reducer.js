import Action from './Action';

/*
- P: Popular
- TR: Top Rated
*/
const initialState = {
  list: [],
  page: 1,
  filter: 'P'
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
  case Action.SET_FILTER:
    return {
      ...state,
      filter: action.filter
    };
  default:
    return state;
  }
};
