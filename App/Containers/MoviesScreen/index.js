import React from 'react';
import { TabNavigator } from 'react-navigation';
import PopularScreen from './PopularScreen';
import TopVotedScreen from './TopVotedScreen';
import TopRevenueScreen from './TopRevenueScreen';
import styles from './Styles/MoviesScreenStyles';
import DrawerHeader from '../../Components/Drawer/Header';
import DrawerWrapper from '../../Components/Drawer/Wrapper';
import { View } from 'react-native-animatable';

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
    <DrawerWrapper>
      <DrawerHeader/>
      <View animation="fadeIn" style={styles.container}>
        <TabView/>
      </View>
    </DrawerWrapper>
  );
};

export default MoviesScreen;


