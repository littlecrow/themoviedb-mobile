import MoviesScreen from '../Containers/TabsContainer';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';

export const NavigationRoutes = {
  MoviesScreen: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Movies List'
    }
  },
  MovieDetailScreen: {
    screen: MovieDetailScreen,
    navigationOptions: {
      title: 'Movie Detail'
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
