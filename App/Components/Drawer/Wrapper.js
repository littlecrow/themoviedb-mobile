import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SideMenu } from 'react-native-elements';
import Menu from './Menu';
import { Metrics } from '../../Themes';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import { toggleDrawer } from '../../Redux/Navigation/ActionCreators';

const Wrapper = ({ children, isOpen }) => {
  return (
    <SideMenu
      isOpen={isOpen}
      menu={<Menu/>}
      openMenuOffset={Metrics.screenWidth * 0.75}>
      {children}
    </SideMenu>
  );
};

Wrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
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

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
