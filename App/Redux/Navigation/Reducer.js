import ActionTypes from './ActionTypes';

export const KEY = 'nav';


const INITIAL_STATE = {
  drawer: {
    isOpen: true
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
  default:
    return state;
  }
};
