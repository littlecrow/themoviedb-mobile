import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import FirstFragment from './FirstFragment';
import SecondFragment from './SecondFragment';
import styles from './Styles/TabsContainerStyles';

const TabView = TabNavigator({
  FirstTab: {
    screen: FirstFragment,
  },
  SecondTab: {
    screen: SecondFragment,
  }
}, {
  tabBarOptions: {
    style: styles.tabBar,
    indicatorStyle: styles.indicator,
  },
  tabBarPosition: 'bottom'
});

const TabContainer = () => {
  return (
    <View style={styles.container}>
      <TabView></TabView>
    </View>
  );
};

TabContainer.propTypes = {

};

export default TabContainer;
