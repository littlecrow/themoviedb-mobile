import React from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './Styles/RootContainerStyles';

const RootContainer = () => (
  <View style={styles.applicationView}>
    <StatusBar
      backgroundColor="transparent"
      translucent/>
    <AppNavigation />
  </View>
);

export default RootContainer;
