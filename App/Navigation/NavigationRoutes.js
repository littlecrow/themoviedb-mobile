import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';

export const AppRoutes = {
  'Discover': {
    path: '/',
    screen: MoviesScreen,
  },
  'Movie Detail': {
    path: '/movies/detail/:id',
    screen: MovieDetailScreen,
  },
  'Test': {
    path: '/test',
    screen: TestScreen,
  }
};


export const DrawerRoutes = [
  {
    name: 'Discover',
    icon: {
      name: 'rowing'
    }
  },
  {
    name: 'Test',
    icon: {
      name:'ios-american-football',
      type:'ionicon'
    }
  }
];
