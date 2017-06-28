import { NavigationActions, StackNavigator, DrawerNavigator } from 'react-navigation';
import ActionTypes from './ActionTypes';
import { AppNavigationOptions, DrawerNavigationOptions } from '../../Navigation/NavigationOptions';
import { ROUTES, DrawerNavigation, AppNavigation } from '../../Navigation/NavigationRoutes';

export const KEY = 'nav';

// App navigator
export const AppNavigator = StackNavigator(AppNavigation, AppNavigationOptions);

// Drawer Navigator: will handle it later
export const AppDrawerNavigator = DrawerNavigator(DrawerNavigation, DrawerNavigationOptions);

// And so on,...
//
//

const INITIAL_STATE = {
  navigation: null,
  // drawer: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.NAVIGATE_TO_DRAWER_SCREEN:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: ROUTES.DiscoverScreen
        }),
        state.navigation
      )
    };
  case ActionTypes.NAVIGATE_TO_DETAIL_SCREEN:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(
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
      navigation: AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state.navigation
      )
    };
  // case ActionTypes.APP_NAVIGATION_OPEN_DRAWER:
  //   return {
  //     ...state,
  //     drawer: AppDrawerNavigator.router.getStateForAction(
  //       NavigationActions.navigate({
  //         routeName: 'DrawerOpen'
  //       }),
  //       state.navigation
  //     )
  //   };
  // case ActionTypes.APP_NAVIGATION_CLOSE_DRAWER:
  //   return {
  //     ...state,
  //     drawer: AppDrawerNavigator.router.getStateForAction(
  //       NavigationActions.navigate({
  //         routeName: 'DrawerClose'
  //       }),
  //       state.navigation
  //     )
  //   };
  }
  return {
    ...state,
    navigation: AppNavigator.router.getStateForAction(action, state.navigation),
    // drawer: AppDrawerNavigator.router.getStateForAction(action, state.discover)
  };
};
