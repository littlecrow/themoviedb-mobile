import React from 'react';
import MoviesScreen from '../Containers/MoviesScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import DiscoverScreen from '../Containers/DiscoverScreen';
import DrawerButton from '../Components/Drawer/Button';

<<<<<<< HEAD
import HomeScreen from '../Containers/HomeScreen';

export const NavigationRoutes = {
=======
export const ROUTES = {
  DiscoverScreen: 'DiscoverScreen',
  MoviesScreen: 'MoviesScreen',
  MovieDetailScreen: 'MovieDetailScreen',
};

const optionWithDrawer = {
  headerBackTitle: null,
  headerLeft: <DrawerButton/>
};

export const AppNavigation = {
  [ROUTES.DiscoverScreen]: {
    screen: DiscoverScreen,
    path: '/'
  }
};

export const DiscoverNavigation = {
>>>>>>> origin
  MoviesScreen: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Discover',
      ...optionWithDrawer
    }
  },
  MovieDetailScreen: {
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
