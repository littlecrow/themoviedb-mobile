import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PopularScreen from './PopularScreen';
import TopVotedScreen from './TopVotedScreen';
import LatestScreen from './LatestScreen';
import styles from './Styles/TVShowsScreenStyles';
import DrawerHeader from '../../Components/Drawer/Header';
import DrawerWrapper from '../../Components/Drawer/Wrapper';

const TabView = TabNavigator({
  PopularScreen: {
    screen: PopularScreen
  },
  TopVotedScreen: {
    screen: TopVotedScreen
  },
  LatestScreen: {
    screen: LatestScreen
  }
}, {
  tabBarOptions: {
    style: styles.tabBar,
    indicatorStyle: styles.indicator,
  },
});

const MoviesScreen = () => {
  return (
    <DrawerWrapper>
      <DrawerHeader/>
      <View style={styles.container}>
        <TabView/>
      </View>
    </DrawerWrapper>
  );
};

export default MoviesScreen;


