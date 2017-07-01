import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import DrawerHeader from '../Components/Drawer/Header';

class TestScreen extends Component {
  render() {
    return (
      <View flex={1}>
        <DrawerHeader/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>
            Test Screen
          </Text>
        </View>
      </View>
    );
  }
}

TestScreen.propTypes = {

};

export default TestScreen;
