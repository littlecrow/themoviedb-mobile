import ActionTypes from './ActionTypes';


export const navigateToDrawerScreen = () => ({
  type: ActionTypes.NAVIGATE_TO_DRAWER_SCREEN
});

export const navigateToDetailScreen = (movie) => ({
  type: ActionTypes.NAVIGATE_TO_DETAIL_SCREEN,
  payload: movie
});

export const navigateBack = () => ({
  type: ActionTypes.NAVIGATE_BACK
});

export default {
  navigateToDrawerScreen,
  navigateToDetailScreen,
  navigateBack,
};
