import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { Images } from '../../../Themes';
import styles from './Styles/DefaultStyles';
import { reduceByCharacters } from '../../../Transforms/TextConverter';
import { setMovieDetail } from '../../../Redux/Movie/ActionCreators';

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
      <Text style={[styles.text, styles.title]}>{reduceByCharacters(item.title)}</Text>
      <Text style={styles.text}>{item.release_date}</Text>
      <Text style={styles.text}>Rating: {item.vote_average}/10</Text>
    </View>
  );
};

const MovieItem = ({ navigateToDetail, movie, setMovieDetail }) => {
  const handleOnPress = () => {
    setMovieDetail(movie);
    navigateToDetail();
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.itemContainer}>
        <View style={styles.imageArea}>
          {_renderImage(movie.poster_path)}
        </View>
        {_renderInfo(movie)}
      </View>
    </TouchableOpacity>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  setMovieDetail: PropTypes.func,
  navigateToDetail: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setMovieDetail: (movie) => dispatch(setMovieDetail(movie)),
  navigateToDetail: () => dispatch(NavigationActions.navigate({
    routeName: 'Movie Detail'
  }))
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
