import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import SearchScreen from '../Containers/SearchScreen';
import TestScreen from '../Containers/TestScreen';
import HomeScreen from '../Containers/HomeScreen';
import AuthScreen from '../Containers/AuthScreen';
import TVShowScreen from '../Containers/TVShowScreen';

export const AppRoutes = {
  'Home': {
    path: '/',
    screen: HomeScreen
  },
  'Movies': {
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
  'TV Shows': {
    path: '/tv-shows',
    screen: TVShowScreen
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

export const INITIAL_ROUTE_NAME = 'TV Shows';

export const DrawerRoutes = [
  {
    name: 'Home',
    icon: {
      name: 'home',
      type: 'material-community'
    }
  },
  {
    name: 'Movies',
    icon: {
      name: 'earth',
      type: 'material-community'
    }
  },
  {
    name: 'TV Shows',
    icon: {
      name: 'earth',
      type: 'material-community'
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
