import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import SearchScreen from '../Containers/SearchScreen';
import TestScreen from '../Containers/TestScreen';
import HomeScreen from '../Containers/HomeScreen';
import AuthScreen from '../Containers/AuthScreen';

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
  'Search': {
    path: '/movies/search',
    screen: SearchScreen,
  },
  'Login': {
    path: '/auth',
    screen: AuthScreen,
  },
  'Test': {
    path: '/test',
    screen: TestScreen,
  }
};

export const INITIAL_ROUTE_NAME = 'Discover';

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
  },
  {
    name: 'Login',
    icon: {
      name: 'user',
      type: 'font-awesome'
    }
  },
];
