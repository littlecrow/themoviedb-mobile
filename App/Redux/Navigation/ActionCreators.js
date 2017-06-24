import ActionTypes from './ActionTypes';

export const navigateToMoviesScreen = () => ({
  type: ActionTypes.NAVIGATE_TO_MOVIES_SCREEN
});

export const navigateToDetailScreen = (movie) => ({
  type: ActionTypes.NAVIGATE_TO_MOVIE_DETAIL_SCREEN,
  payload: movie
});

export const navigateTab = () => ({
  type: ActionTypes.NAVIGATE_TAB
});

export const navigateBack = () => ({
  type: ActionTypes.NAVIGATE_BACK
});

export default {
  navigateToMoviesScreen,
  navigateToDetailScreen,
  navigateTab,
  navigateBack
};
