import { NavigationActions, StackNavigator, DrawerNavigator } from 'react-navigation';
import ActionTypes from './ActionTypes';
import { AppNavigationOptions, DiscoverNavigationOptions} from '../../Navigation/NavigationOptions';
import { ROUTES, DiscoverNavigation, AppNavigation } from '../../Navigation/NavigationRoutes';

export const KEY = 'nav';

export const AppNavigator = DrawerNavigator(AppNavigation, AppNavigationOptions);
export const DiscoverNavigator = StackNavigator(DiscoverNavigation, DiscoverNavigationOptions);

const MoviesScreenAction = DiscoverNavigator.router.getActionForPathAndParams(ROUTES.MoviesScreen);

const INITIAL_STATE = {
  navigation: null,
  discover: DiscoverNavigator.router.getStateForAction(MoviesScreenAction),
  drawer: {
    disableGestures: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.APP_NAVIGATION_OPEN_DRAWER:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'DrawerOpen'
        }),
        state.navigation
      )
    };
  case ActionTypes.APP_NAVIGATION_CLOSE_DRAWER:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'DrawerClose'
        }),
        state.navigation
      )
    };
  case ActionTypes.DISCOVER_NAVIGATE_TO_MOVIES_SCREEN:
    return {
      ...state,
      discover: DiscoverNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: ROUTES.DiscoverScreen
        }),
        state.discover
      )
    };
  case ActionTypes.DISCOVER_NAVIGATE_TO_DETAIL_SCREEN:
    return {
      ...state,
      discover: DiscoverNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: ROUTES.MovieDetailScreen,
          params: {
            movie: action.payload
          }
        }),
        state.discover
      ),
      drawer: {
        ...state.drawer,
        disableGestures: true
      }
    };
  case ActionTypes.DISCOVER_NAVIGATE_BACK:
    return {
      ...state,
      discover: DiscoverNavigator.router.getStateForAction(
        NavigationActions.back(),
        state.discover
      )
    };
  }
  return {
    ...state,
    navigation: AppNavigator.router.getStateForAction(action, state.navigation),
    discover: DiscoverNavigator.router.getStateForAction(action, state.discover)
  };
};
