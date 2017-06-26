import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import SideMenu from 'react-native-side-menu';
import AppNavigation from '../Navigation/AppNavigation';
import Metrics from '../Themes/Metrics';
// Styles
import styles from './Styles/RootContainerStyles';
import DrawerMenu from '../Components/Drawer/Menu';


class RootContainer extends Component {

  render () {
    const drawer = <DrawerMenu navigator={navigator}/>;

    return (
      <View style={styles.applicationView}>
        <StatusBar
          backgroundColor="transparent"
          translucent/>
        <SideMenu
          isOpen={true}
          menu={drawer}
          menuPosition='left'
          openMenuOffset={Metrics.screenWidth * 0.75}
          autoClosing={true}
        >
          <AppNavigation />
        </SideMenu>
      </View>
    );
  }
}

export default RootContainer;
