import ActionTypes from './ActionTypes';


export const navigateToDrawerScreen = () => ({
  type: ActionTypes.NAVIGATE_TO_DRAWER_SCREEN
});

export const navigateToDetailScreen = (movie) => ({
  type: ActionTypes.NAVIGATE_TO_DETAIL_SCREEN,
  payload: movie
});

export const navigateToSearchScreen = () => ({
  type: ActionTypes.NAVIGATE_TO_SEARCH_SCREEN
});

export const navigateBack = () => ({
  type: ActionTypes.NAVIGATE_BACK
});

export const toggleDrawer = () => ({
  type: ActionTypes.TOGGLE_DRAWER
});

export const navigateInDrawer = (routeName) => ({
  type: ActionTypes.NAVIGATE_IN_DRAWER,
  payload: routeName
});

export default {
  navigateToDrawerScreen,
  navigateToDetailScreen,
  navigateToSearchScreen,
  navigateBack,
  toggleDrawer,
  navigateInDrawer
};
