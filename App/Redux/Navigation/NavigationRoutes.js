import MoviesScreen from '../../Containers/MoviesScreen';
import MovieDetailScreen from '../../Containers/MovieDetailScreen';
import React from 'react';
import DrawerButton from '../../Components/Drawer/Button';

export const ROUTES = {
  DiscoverScreen: 'DiscoverScreen',
  MovieDetailScreen: 'MovieDetailScreen'
};

const optionWithDrawer = {
  headerBackTitle: null,
  headerLeft: <DrawerButton/>
};

export default {
  DiscoverScreen: {
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
  }
};
