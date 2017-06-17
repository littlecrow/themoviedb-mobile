import { StackNavigator, TabNavigator } from 'react-navigation';
import PopularMoviesScreen from './PopularMoviesScreen';
import TopRatedMoviesScreen from './TopRatedMoviesScreen';

const MoviesScreen = TabNavigator({
  Popular: {
    screen: PopularMoviesScreen
  },
  TopRated: {
    screen: TopRatedMoviesScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MoviesScreen;
