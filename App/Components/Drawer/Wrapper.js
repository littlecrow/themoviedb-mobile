import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SideMenu } from 'react-native-elements';
import Menu from './Menu';
import { Metrics } from '../../Themes';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import { setDrawerState } from '../../Redux/Navigation/ActionCreators';

const Wrapper = ({ children, isOpen, setDrawerState }) => {
  return (
    <SideMenu
      isOpen={isOpen}
      onChange={(isOpen) => setDrawerState(isOpen)}
      menu={<Menu/>}
      openMenuOffset={Metrics.screenWidth * 0.65}>
      <View flex={1} backgroundColor={'white'}>
        {children}
      </View>
    </SideMenu>
  );
};

Wrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setDrawerState: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

const mapStateToProps = (state) => {
  return {
    isOpen: state[NAVIGATION_KEY].drawer.isOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDrawerState: (isOpen) => {
      dispatch(setDrawerState(isOpen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
