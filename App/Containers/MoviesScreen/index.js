import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View } from 'react-native';
import PopularScreen from './PopularScreen';
import TopVotedScreen from './TopVotedScreen';
import TopRevenueScreen from './TopRevenueScreen';
import styles from './Styles/MoviesScreenStyles';
import DrawerHeader from '../../Components/Drawer/Header';

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
      <DrawerHeader/>
      <TabView/>
    </View>
  );
};

export default MoviesScreen;


