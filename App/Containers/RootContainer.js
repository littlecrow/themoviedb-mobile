import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

const SideMenu = require('react-native-side-menu');
import DrawerMenu from '../Components/Drawer/Menu';

// dimensions
const SCREEN_WIDTH = Dimensions.get('window').width;

class RootContainer extends Component {

  render () {
    const drawer = <DrawerMenu navigator={navigator}/>;

    return (
      <View style={styles.applicationView}>
        <StatusBar
          backgroundColor="transparent"
          translucent/>
        <SideMenu
          menu={drawer}
          menuPosition='left'
          openMenuOffset={SCREEN_WIDTH * 0.85}
          autoClosing={true}
        >
          <AppNavigation />
        </SideMenu>
      </View>
    );
  }
}

export default RootContainer;
