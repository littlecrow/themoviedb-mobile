import React, { Component } from 'react';
import { View, StatusBar, BackHandler } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar
          backgroundColor="transparent"
          translucent/>
        <AppNavigation/>
      </View>
    );
  }
}

RootContainer.propTypes = {
  navigateBack: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigateBack: () => dispatch(NavigationActions.back())
  };
};

export default connect(undefined, mapDispatchToProps)(RootContainer);
