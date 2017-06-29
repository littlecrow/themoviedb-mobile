import React from 'react';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import DrawerScreen from '../Containers/DrawerScreen';
import DrawerToggleButton from '../Components/Drawer/Button';

<<<<<<< HEAD
import HomeScreen from '../Containers/HomeScreen';

export const NavigationRoutes = {
=======
export const ROUTES = {
  DrawerScreen: 'DrawerScreen',
  MoviesScreen: 'MoviesScreen',
  MovieDetailScreen: 'MovieDetailScreen',
  TestScreen: 'TestScreen'
};

export const DrawerNavigation = {
  [ROUTES.MoviesScreen]: {
    screen: MoviesScreen,
    path: '/',
    navigationOptions: {
      drawerLabel: 'Notifications',
    },
  },
  [ROUTES.TestScreen]: {
    screen: TestScreen,
    path: '/test',
  }
};

<<<<<<< HEAD
export const DiscoverNavigation = {
>>>>>>> origin
  MoviesScreen: {
    screen: MoviesScreen,
=======
export const AppNavigation = {
  [ROUTES.DrawerScreen]: {
    screen: DrawerScreen,
>>>>>>> origin
    navigationOptions: {
      title: 'Discover',
      headerLeft: <DrawerToggleButton/>
    }
  },
  [ROUTES.MovieDetailScreen]: {
    screen: MovieDetailScreen,
    navigationOptions: {
      title: 'Detail',
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
};
