import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DrawerHeader from '../Components/Drawer/Header';
import DrawerNavigation from '../Navigation/DrawerNavigation';

class DrawerScreen extends Component {
  render() {
    return (
      <View>
        <DrawerHeader/>
        <DrawerNavigation/>
      </View>
    );
  }
}

DrawerScreen.propTypes = {

};

export default DrawerScreen;
