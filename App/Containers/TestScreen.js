import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class TestScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Test Screen
        </Text>
      </View>
    );
  }
}

TestScreen.propTypes = {

};

export default TestScreen;
