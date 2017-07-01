import React from 'react';
import { View } from 'react-native';
import { Route} from 'react-router-native';
import styles from './Styles/NavigationStyles';
import MovieDetailScreen from '../Containers/MovieDetailScreen';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';

const AppNavigation = () => (
  <View style={styles.container}>
    <Route exact path="/" component={MoviesScreen}/>
    <Route exact path="/test" component={TestScreen}/>
    <Route exact path="/movies/detail/:id" component={MovieDetailScreen}/>
  </View>
);

export default AppNavigation;
