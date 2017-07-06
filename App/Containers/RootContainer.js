import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

const RootContainer = () => (
  <View style={styles.applicationView}>
    <StatusBar
      backgroundColor="transparent"
      translucent/>
    <AppNavigation/>
  </View>
);

export default RootContainer;
