import MoviesScreen from '../../Containers/MoviesScreen';
import MovieDetailScreen from '../../Containers/MovieDetailScreen';

export const ROUTES = {
  DiscoverScreen: 'DiscoverScreen',
  MovieDetailScreen: 'MovieDetailScreen'
};

export default {
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
