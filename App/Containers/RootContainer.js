import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

const SideMenu = require('react-native-side-menu');
import DrawerMenu from '../Components/Drawer/Menu';

class RootContainer extends Component {

  render () {
    const drawer = <DrawerMenu navigator={navigator}/>;

    return (
      <View style={styles.applicationView}>
        <SideMenu menu={drawer}>
          <AppNavigation />
        </SideMenu>
      </View>
    );
  }
}

export default RootContainer;
