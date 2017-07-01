import React from 'react';
import { View } from 'react-native';
import { Route} from 'react-router-native';
import styles from './Styles/NavigationStyles';
import DrawerScreen from '../Containers/DrawerScreen';
import MovieDetailScreen from '../Containers/MovieDetailScreen';


const AppNavigation = () => (
  <View style={styles.container}>
    <Route exact path="/" component={DrawerScreen}/>
    <Route exact path="/movies/detail/:id" component={MovieDetailScreen}/>
  </View>
);

export default AppNavigation;
