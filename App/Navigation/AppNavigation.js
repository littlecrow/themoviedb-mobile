import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import styles from './Styles/NavigationStyles';
import PopularMoviesFragment from '../Containers/MoviesScreen/PopularMoviesFragment';
import TopRatedMoviesFragment from '../Containers/MoviesScreen/TopRatedMoviesFragment';

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
  },
  PopularScreen: {
    screen: PopularMoviesFragment
  },
  TopRatedMoviesFragment: {
    screen: TopRatedMoviesFragment
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
