import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';

export const NavigationRoutes = {
  DiscoverScreen: {
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
  }
};

export const NavigationOptions = {
  // Default config for all screens
  initialRouteName: 'DiscoverScreen',
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
