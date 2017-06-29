import React from 'react';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import DrawerScreen from '../Containers/DrawerScreen';
import DrawerHeader from '../Components/Header/DrawerHeader';

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

export const AppNavigation = {
  [ROUTES.DrawerScreen]: {
    screen: DrawerScreen,
    navigationOptions: {
      title: 'Discover',
      header: <DrawerHeader/>
    }
  },
  [ROUTES.MovieDetailScreen]: {
    screen: MovieDetailScreen,
    navigationOptions: {
      title: 'Detail',
    }
  }
};
