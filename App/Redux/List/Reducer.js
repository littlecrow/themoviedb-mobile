import ActionTypes from './ActionTypes';

export const KEY = 'list';

export const INITIAL_STATE = {
  quantity: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.SET_ITEMS_PER_ROW:
    return {
      ...state,
      quantity: action.payload
    };
  default:
    return state;
  }
};
