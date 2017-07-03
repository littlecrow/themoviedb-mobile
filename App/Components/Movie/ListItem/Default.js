import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { withRouter } from 'react-router-dom';
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

const MovieItem = ({ history, movie, setMovieDetail }) => {
  const handleOnPress = () => {
    setMovieDetail(movie);
    history.push('/movies/detail/' + movie.id);
  };
  return (
    <AnimatableView animation="fadeIn" duration={300}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.itemContainer}>
          <View style={styles.imageArea}>
            {_renderImage(movie.poster_path)}
          </View>
          {_renderInfo(movie)}
        </View>
      </TouchableOpacity>
    </AnimatableView>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  setMovieDetail: PropTypes.func,
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setMovieDetail: (movie) => dispatch(setMovieDetail(movie))
});

export default withRouter(connect(undefined, mapDispatchToProps)(MovieItem));
