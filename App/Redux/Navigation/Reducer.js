import ActionTypes from './ActionTypes';

export const KEY = 'nav';


const INITIAL_STATE = {
  drawer: {
    isOpen: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.TOGGLE_DRAWER:
    return {
      drawer: {
        ...state.drawer,
        isOpen: !state.drawer.isOpen
      }
    };
  case ActionTypes.SET_DRAWER_STATE:
    return {
      drawer: {
        ...state.drawer,
        isOpen: action.isOpen
      }
    };
  default:
    return state;
  }
};
