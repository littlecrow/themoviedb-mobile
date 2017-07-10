import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import SearchScreen from '../Containers/SearchScreen';
import HomeScreen from '../Containers/HomeScreen';
import AuthScreen from '../Containers/AuthScreen';
import SettingScreen from '../Containers/SettingScreen';

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
  'Setting': {
    path: '/test',
    screen: SettingScreen,
  }
};

export const INITIAL_ROUTE_NAME = 'Setting';

export const DrawerRoutes = [
  {
    name: 'Home',
    icon: {
      name: 'home',
      type: 'material-community'
    }
  },
  {
    name: 'Discover',
    icon: {
      name: 'earth',
      type: 'material-community'
    }
  },
  {
    name: 'Login',
    icon: {
      name: 'user',
      type: 'font-awesome'
    }
  },
  {
    name: 'Setting',
    bottom: true,
    icon: {
      name: 'gear',
      type: 'font-awesome'
    }
  },
];
