import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {

  render () {
    return (
      <View style={styles.applicationView}>
        <AppNavigation />
      </View>
    );
  }
}

export default RootContainer;
