import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeRouter} from 'react-router-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './Styles/RootContainerStyles';
import { Metrics } from '../Themes';
import { SideMenu } from 'react-native-elements';
import Menu from '../Components/Drawer/Menu';
import { NAVIGATION_KEY } from '../Redux/Navigation';
import { toggleDrawer } from '../Redux/Navigation/ActionCreators';

const RootContainer = ({ isOpen }) => (
  <NativeRouter>
    <View style={styles.applicationView}>
      <StatusBar
        backgroundColor="transparent"
        translucent/>
      <SideMenu
        isOpen={isOpen}
        menu={<Menu/>}
        openMenuOffset={Metrics.screenWidth * 0.75}>
        <AppNavigation/>
      </SideMenu>
    </View>
  </NativeRouter>
);


RootContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isOpen: state[NAVIGATION_KEY].drawer.isOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => {
      dispatch(toggleDrawer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
