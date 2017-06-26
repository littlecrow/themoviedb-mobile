import { NavigationActions, StackNavigator } from 'react-navigation';
import ActionTypes from './ActionTypes';
import NavigationOptions from '../../Navigation/NavigationOptions';
import NavigationRoutes, { ROUTES } from './NavigationRoutes';

export const KEY = 'nav';
// Manifest of possible screens
export const AppNavigator = StackNavigator(NavigationRoutes, NavigationOptions);

const { getActionForPathAndParams, getStateForAction } = AppNavigator.router;
const DiscoverScreenAction = getActionForPathAndParams(ROUTES.DiscoverScreen);

const INITIAL_STATE = {
  navigation: getStateForAction(DiscoverScreenAction),
  drawer: {
    isOpen: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.NAVIGATE_TO_MOVIES_SCREEN:
    return {
      ...state,
      navigation: getStateForAction(
        NavigationActions.navigate({
          routeName: ROUTES.DiscoverScreen
        }),
        state.navigation
      )
    };
  case ActionTypes.NAVIGATE_TO_MOVIE_DETAIL_SCREEN:
    return {
      ...state,
      navigation: getStateForAction(
        NavigationActions.navigate({
          routeName: ROUTES.MovieDetailScreen,
          params: {
            movie: action.payload
          }
        }),
        state.navigation
      )
    };
  case ActionTypes.NAVIGATE_BACK:
    return {
      ...state,
      navigation: getStateForAction(
        NavigationActions.back(),
        state.navigation
      )
    };
  case ActionTypes.OPEN_DRAWER:
    return {
      ...state,
      drawer: {
        ...state.drawer,
        isOpen: true,
      }
    };
  case ActionTypes.CLOSE_DRAWER:
    return {
      ...state,
      drawer: {
        ...state.drawer,
        isOpen: false,
      }
    };
  default:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(action, state.navigation)
    };
  }
};
