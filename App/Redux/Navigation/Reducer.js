import ActionTypes from './ActionTypes';
import { AppRoutes } from '../../Navigation/NavigationRoutes';
import { StackNavigator, NavigationActions } from 'react-navigation';

export const KEY = 'nav';

export const AppNavigator = StackNavigator(AppRoutes, {
  navigationOptions: {
    header: null
  }
});

const INITIAL_STATE = {
  drawer: {
    isOpen: false
  },
  navigation: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionTypes.TOGGLE_DRAWER:
    return {
      ...state,
      drawer: {
        ...state.drawer,
        isOpen: !state.drawer.isOpen
      }
    };
  case ActionTypes.SET_DRAWER_STATE:
    return {
      ...state,
      drawer: {
        ...state.drawer,
        isOpen: action.isOpen
      }
    };
  default:
    return {
      ...state,
      navigation: AppNavigator.router.getStateForAction(action, state.navigation),
      drawer: {
        ...state.drawer,
        isOpen: false
      }
    };
  }
};
