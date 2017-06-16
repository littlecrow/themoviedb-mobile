import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
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
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'MoviesScreen',
  navigationOptions: {
    //headerStyle: styles.header
  }
});

export default PrimaryNav;
