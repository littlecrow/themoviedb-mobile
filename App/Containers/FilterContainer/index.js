import { TabNavigator } from 'react-navigation';
import PopularScreen from './PopularScreen';
import TopRatedScreen from './TopRatedScreen';

const TabView = TabNavigator({
  PopularScreen: {
    screen: PopularScreen
  },
  TopRatedScreen: {
    screen: TopRatedScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  },
  tabBarPosition: 'bottom'
});

import React from 'react';

const Filter = () => {
  return (
    <TabView></TabView>
  );
};

export default Filter;


