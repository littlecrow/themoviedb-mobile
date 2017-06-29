import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from 'react-native';
import PopularScreen from './PopularScreen';
import TopVotedScreen from './TopVotedScreen';
import TopRevenueScreen from './TopRevenueScreen';
import styles from './Styles/MoviesScreenStyles';

const TabView = TabNavigator({
  PopularScreen: {
    screen: PopularScreen
  },
  TopVotedScreen: {
    screen: TopVotedScreen
  },
  TopRevenueScreen: {
    screen: TopRevenueScreen
  }
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


