import { TabNavigator } from 'react-navigation';
import PopularMoviesFragment from './PopularMoviesFragment';
import TopRatedMoviesFragment from './TopRatedMoviesFragment';

const MoviesScreen = TabNavigator({
  Popular: {
    screen: PopularMoviesFragment
  },
  TopRated: {
    screen: TopRatedMoviesFragment
  }
}, {
  onNavigationStateChange: () => {
    console.log('state changed');
  },
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MoviesScreen;
