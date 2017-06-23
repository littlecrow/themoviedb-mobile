import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import styles from './Styles/ListItemStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

const MovieItem = ({ movie, navigateToDetail }) => {
  return (
    <TouchableHighlight onPress={() => navigateToDetail(movie)}>
      <View style={styles.itemContainer}>
        <View style={styles.imgArea}>
          <FitImage
            source={{uri: `${THEMOVIEDB_IMAGE_SRC}` + movie.poster_path}}
            resizeMode='contain'
            style={styles.img}/>
        </View>
        <View style={styles.infoArea}>
          <Text style={[styles.text, styles.title]}>{movie.title}</Text>
          <Text style={styles.text}>{movie.release_date}</Text>
          <Text style={styles.text}>Rating: {movie.vote_average}/10</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (movie) => dispatch(NavigationActionCreators.navigateToDetailScreen(movie))
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
