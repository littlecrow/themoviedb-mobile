import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppNavigator} from '../Redux/Navigation/Reducer';
import { NAVIGATION_KEY } from '../Redux/Navigation';

const AppNavigation = ({dispatch, nav}) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

AppNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state[NAVIGATION_KEY]
});

export default connect(mapStateToProps)(AppNavigation);
