import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { Images } from '../../../Themes';
import styles from './Styles/DefaultStyles';
import { Link } from 'react-router-native';

const _renderImage = (image) => {
  if (image !== null) {
    return (
      <Image
        source={{uri: THEMOVIEDB_IMAGE_SRC + image}}
        style={styles.image}
      />
    );
  }
  return <Image source={Images.defaultBackground} style={styles.image}/>;
};

const _renderInfo = (item) => {
  return (
    <View style={styles.infoArea}>
      <Text style={[styles.text, styles.title]}>{item.title}</Text>
      <Text style={styles.text}>{item.release_date}</Text>
      <Text style={styles.text}>Rating: {item.vote_average}/10</Text>
    </View>
  );
};

const MovieItem = ({ movie }) => {
  return (
    <AnimatableView animation="fadeIn">
      <Link to={'/movies/detail/' + movie.id}>
        <View style={styles.itemContainer}>
          <View style={styles.imageArea}>
            {_renderImage(movie.poster_path)}
          </View>
          {_renderInfo(movie)}
        </View>
      </Link>
    </AnimatableView>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  navigateToDetail: PropTypes.func
};

export default MovieItem;
