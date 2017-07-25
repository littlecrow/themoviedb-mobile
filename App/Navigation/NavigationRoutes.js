import MovieDetailScreen from '../Containers/MovieDetailScreen';
import TVShowDetailScreen from '../Containers/TVShowDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import SearchScreen from '../Containers/SearchScreen';
import HomeScreen from '../Containers/HomeScreen';
import AuthScreen from '../Containers/AuthScreen';
import TVShowScreen from '../Containers/TVShowScreen';
import SettingScreen from '../Containers/SettingScreen';

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
    path: '/search',
    screen: SearchScreen,
  },
  'TV Shows': {
    path: '/tv-shows',
    screen: TVShowScreen
  },
  'TV Show Detail': {
    path: '/tvshows/detail/:id',
    screen: TVShowDetailScreen
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

export const INITIAL_ROUTE_NAME = 'Home';

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
