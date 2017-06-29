import React from 'react';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import DrawerScreen from '../Containers/DrawerScreen';
import DrawerToggleButton from '../Components/Drawer/Button';
import HomeScreen from '../Containers/HomeScreen';

export const ROUTES = {
  DrawerScreen: 'DrawerScreen',
  MoviesScreen: 'MoviesScreen',
  MovieDetailScreen: 'MovieDetailScreen',
  TestScreen: 'TestScreen',
  HomeScreen: 'HomeScreen'
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
  [ROUTES.HomeScreen]: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  [ROUTES.DrawerScreen]: {
    screen: DrawerScreen,
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
};
