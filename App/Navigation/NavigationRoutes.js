import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';

import HomeScreen from '../Containers/HomeScreen';

export const NavigationRoutes = {
  MoviesScreen: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Discover'
    }
  },
  MovieDetailScreen: {
    screen: MovieDetailScreen,
    navigationOptions: {
      title: 'Detail'
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
};

export const NavigationOptions = {
  // Default config for all screens
  initialRouteName: 'MoviesScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerBackTitleStyle: styles.back
  }
};

export default {
  NavigationRoutes,
  NavigationOptions
};
