import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { Colors } from '../Themes';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetailScreen extends Component {
  render() {
    const { state } = this.props.navigation;
    const movie = state.params.movie;

    return (
      <View style={setItemBackground(`${IMAGE_URL}/` + movie.backdrop_path)}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    );
  }
}

MovieDetailScreen.propTypes = {

};

const setItemBackground = (imageURL) => {
  return {
    background: 'url(' + imageURL + ')'
  };
};

const styles = StyleSheet.create({
  title: {
    color: Colors.ember
  }
});

export default MovieDetailScreen;
