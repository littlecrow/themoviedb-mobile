import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeRouter} from 'react-router-native';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './Styles/RootContainerStyles';

const RootContainer = () => (
  <NativeRouter>
    <View style={styles.applicationView}>
      <StatusBar
        backgroundColor="transparent"
        translucent/>
      <AppNavigation/>
    </View>
  </NativeRouter>
);

export default RootContainer;
