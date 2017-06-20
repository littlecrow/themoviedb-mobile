import { TouchableHighlight, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PopularMoviesFragment from './PopularMoviesFragment';
import TopRatedMoviesFragment from './TopRatedMoviesFragment';
import { MoviesConstant } from '../../Redux/Movies';

const MoviesScreen = TabNavigator({
  Popular: {
    screen: PopularMoviesFragment,
    navigationOptions: {
      title: 'Popular',
    }
  },
  TopRated: {
    screen: TopRatedMoviesFragment,
    navigationOptions: {
      title: 'Top Rated'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MoviesScreen;
