import ActionTypes from './ActionTypes';

export const toggleDrawer = () => ({
  type: ActionTypes.TOGGLE_DRAWER
});

export const setDrawerState = (isOpen) => ({
  type: ActionTypes.SET_DRAWER_STATE,
  isOpen
});

export default {
  toggleDrawer
};
