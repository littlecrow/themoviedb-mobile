import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles/BackdropStyles';

class DefaultMovieDetail extends Component {
  render() {
    const detail = this.props.detail;
    return (
      <View style={styles.container}>
        <Text>{detail.title}</Text>
      </View>
    );
  }
}

export default DefaultMovieDetail;
