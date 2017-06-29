import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { Images } from '../../../Themes';
import styles from './Styles/DefaultStyles';
import { NavigationActionCreators } from '../../../Redux/Navigation';

const _renderImage = (image) => {
  if (image !== null) {
    return (
      <FitImage
        source={{uri: THEMOVIEDB_IMAGE_SRC + image}}
        resizeMode='contain'
        style={styles.img}
      />
    );
  }
  return <Image source={Images.emptyImage}/>;
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

const MovieItem = ({ movie, navigateToDetail }) => {
  return (
    <TouchableHighlight onPress={() => navigateToDetail(movie)}>
      <View style={styles.itemContainer}>
        <View style={styles.imgArea}>
          {_renderImage(movie.poster_path)}
        </View>
        {_renderInfo(movie)}
      </View>
    </TouchableHighlight>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  navigateToDetail: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (movie) => dispatch(NavigationActionCreators.navigateToDetailScreen(movie))
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
