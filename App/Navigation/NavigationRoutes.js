
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';

export const AppRoutes = [
  {
    name: 'Discover',
    path: '/',
    component: MoviesScreen,
    exact: true
  },
  {
    name: 'Movie Detail',
    path: '/movies/detail/:id',
    component: MovieDetailScreen,
    exact: true
  },
  {
    name: 'Test',
    path: '/test',
    component: TestScreen,
    exact: true
  }
];


export const DrawerRoutes = [
  {
    name: 'Discover',
    to: '/',
    icon: {
      name: 'rowing'
    }
  },
  {
    name: 'Test',
    to: '/test',
    icon: {
      name:'ios-american-football',
      type:'ionicon'
    }
  }
];
