import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DiscoverNavigator } from '../Redux/Navigation/Reducer';
import { NAVIGATION_KEY } from '../Redux/Navigation';

const DiscoverNavigation = ({dispatch, nav}) => (
  <DiscoverNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) }/>
);

DiscoverNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state[NAVIGATION_KEY].discover,
});

export default connect(mapStateToProps)(DiscoverNavigation);
