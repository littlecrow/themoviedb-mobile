import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './Styles/BackdropStyles';

class DefaultMovieDetail extends Component {
  render() {
    const detail = this.props.detail;
    return (
      <View style={styles.container}>
        <Text>{detail.name}</Text>
      </View>
    );
  }
}

DefaultMovieDetail.propTypes = {
  detail: PropTypes.object
};

export default DefaultMovieDetail;
