import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import FitImage from 'react-native-fit-image';
import styles from './Styles/BackdropDetailStyles';

class DefaultMovieDetail extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
      </View>
    );
  }
}

export default DefaultMovieDetail;
