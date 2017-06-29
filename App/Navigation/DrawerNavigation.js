import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NAVIGATION_KEY } from '../Redux/Navigation';
import { AppDrawerNavigator } from '../Redux/Navigation/Reducer';

const DrawerNavigation = ({dispatch, nav}) => (
  <AppDrawerNavigator
    navigation={ addNavigationHelpers({ dispatch, state: nav }) }
  />
);

DrawerNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state[NAVIGATION_KEY].drawer,
});

export default connect(mapStateToProps)(DrawerNavigation);
