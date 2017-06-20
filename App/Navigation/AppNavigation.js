import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';
import MoviesFragment from '../Containers/MoviesScreen/MoviesFragment';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MoviesScreen: {
    screen: MoviesFragment,
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
  //headerMode: 'screen',
  initialRouteName: 'MoviesScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
});

export default PrimaryNav;
