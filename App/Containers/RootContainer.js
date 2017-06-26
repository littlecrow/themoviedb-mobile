import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import SideMenu from 'react-native-side-menu';
import AppNavigation from '../Navigation/AppNavigation';
import Metrics from '../Themes/Metrics';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Styles/RootContainerStyles';
import DrawerMenu from '../Components/Drawer/Menu';
import { NAVIGATION_KEY } from '../Redux/Navigation';


class RootContainer extends Component {

  render () {
    const drawer = <DrawerMenu navigator={navigator}/>;

    const { isOpen } = this.props.drawer;
    return (
      <View style={styles.applicationView}>
        <StatusBar
          backgroundColor="transparent"
          translucent/>
        <SideMenu
          disableGestures={true}
          isOpen={isOpen}
          menu={drawer}
          menuPosition='left'
          openMenuOffset={Metrics.screenWidth * 0.75}
          autoClosing={false}>
          <AppNavigation />
        </SideMenu>
      </View>
    );
  }
}

RootContainer.propTypes = {
  drawer: PropTypes.object
};

const mapStateToProps = state => ({
  drawer: state[NAVIGATION_KEY].drawer,
});

export default connect(mapStateToProps)(RootContainer);
