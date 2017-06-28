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
  tabBarPosition: 'bottom'
});

import React from 'react';

const Filter = () => {
  return (
    <View style={styles.container}>
      <TabView></TabView>
    </View>
  );
};

export default Filter;


