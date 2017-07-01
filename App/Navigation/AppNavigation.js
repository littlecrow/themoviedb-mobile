import React from 'react';
import { View } from 'react-native';
import { Route} from 'react-router-native';
import styles from './Styles/NavigationStyles';
import { AppRoutes } from './NavigationRoutes';

const AppNavigation = () => (
  <View style={styles.container}>
    { AppRoutes.map(({...rest}, index) => (
      <Route
        {...rest}
        key={index}/>
    ))}
  </View>
);

export default AppNavigation;
