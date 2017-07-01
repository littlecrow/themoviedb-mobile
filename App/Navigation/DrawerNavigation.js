import React from 'react';
import { View } from 'react-native';
import { Route} from 'react-router-native';
import PropTypes from 'prop-types';
import MoviesScreen from '../Containers/MoviesScreen';
import TestScreen from '../Containers/TestScreen';

const DrawerNavigation = () => (
  <View style={{height: '100%'}}>
    <Route exact path="/" component={MoviesScreen}/>
    <Route exact path="/test" component={TestScreen}/>
  </View>
);

export default DrawerNavigation;
