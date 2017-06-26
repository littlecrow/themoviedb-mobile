import { NavigationActions, StackNavigator } from 'react-navigation';
import ActionTypes from './ActionTypes';
import { NavigationRoutes, NavigationOptions } from '../../Navigation/NavigationRoutes';

export const KEY = 'navigation';
// Manifest of possible screens
export const AppNavigator = StackNavigator(NavigationRoutes, NavigationOptions);

const { getActionForPathAndParams, getStateForAction } = AppNavigator.router;
const DiscoverScreenAction = getActionForPathAndParams('DiscoverScreen');
// const MovieDetailScreen = getActionForPathAndParams('MovieDetailScreen');

const INITIAL_STATE = getStateForAction(DiscoverScreenAction);

export default (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
  case ActionTypes.NAVIGATE_TO_MOVIES_SCREEN:
    nextState = getStateForAction(
      NavigationActions.navigate({ routeName: 'DiscoverScreen' }),
      state
    );
    break;
  case ActionTypes.NAVIGATE_TO_MOVIE_DETAIL_SCREEN:
    nextState = getStateForAction(
      NavigationActions.navigate({
        routeName: 'MovieDetailScreen',
        params: {
          movie: action.payload
        }
      }),
      state
    );
    break;
  case ActionTypes.NAVIGATE_BACK:
    nextState = getStateForAction(
      NavigationActions.back(),
      state
    );
    break;
  default:
    nextState = AppNavigator.router.getStateForAction(action, state);
    break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
