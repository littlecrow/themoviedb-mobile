import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';
import HomeScreen from '../Containers/HomeScreen';

export const AppRoutes = {
  'Home': {
    path: '/',
    screen: HomeScreen
  },
  'Discover': {
    path: '/movies',
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
