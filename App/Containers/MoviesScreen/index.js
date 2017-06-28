import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from 'react-native';
import PopularScreen from './PopularScreen';
import TopRatedScreen from './TopRatedScreen';
import styles from './Styles/MoviesScreenStyles';

const TabView = TabNavigator({
  PopularScreen: {
    screen: PopularScreen
  },
  TopRatedScreen: {
    screen: TopRatedScreen
  },
  DuplicatedPopularScreen: {
    screen: PopularScreen
  },
}, {
  tabBarOptions: {
    style: styles.tabBar,
    indicatorStyle: styles.indicator,
  },
});

const MoviesScreen = () => {
  return (
    <View style={styles.container}>
      <TabView/>
    </View>
  );
};

export default MoviesScreen;


