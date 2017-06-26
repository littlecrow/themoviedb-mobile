import ActionTypes from './ActionTypes';

export const appOpenDrawer = () => ({
  type: ActionTypes.APP_NAVIGATION_OPEN_DRAWER
});

export const appCloseDrawer = () => ({
  type: ActionTypes.APP_NAVIGATION_CLOSE_DRAWER
});

export const appNavigateToDiscover = () => ({
  type: ActionTypes.APP_NAVIGATE_TO_DISCOVER
});

export const discoverNavigateToMoviesScreen = () => ({
  type: ActionTypes.DISCOVER_NAVIGATE_TO_MOVIES_SCREEN
});

export const discoverNavigateToDetailScreen = (movie) => ({
  type: ActionTypes.DISCOVER_NAVIGATE_TO_DETAIL_SCREEN,
  payload: movie
});

export const discoverNavigateBack = () => ({
  type: ActionTypes.DISCOVER_NAVIGATE_BACK
});


export default {
  appOpenDrawer,
  appCloseDrawer,
  appNavigateToDiscover,
  discoverNavigateToMoviesScreen,
  discoverNavigateToDetailScreen,
  discoverNavigateBack,
};
