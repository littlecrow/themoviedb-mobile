import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Navigation />
      </View>
    );
  }
}

export default RootContainer;
