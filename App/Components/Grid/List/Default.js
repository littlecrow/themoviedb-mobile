import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { Images } from '../../../Themes';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles/DefaultStyles';
import { reduceByCharacters } from '../../../Transforms/TextConverter';
import { setMovieDetail } from '../../../Redux/Movie/ActionCreators';
import { setTVShowDetail } from '../../../Redux/TVShow/ActionCreators';
import { ListConstant } from '../../../Redux/List';

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
      <View justifyContent="center">
        <Text style={[styles.text, styles.title]}>
          {reduceByCharacters((item.hasOwnProperty('title') && item['title']) ? item.title : item.name)}
        </Text>
      </View>
      <MaterialIcons name='navigate-next' size={28} color='white'/>
    </View>
  );
};

const MovieItem = ({ navigateToMovieDetail, navigateToTVShowDetail, type, data, setMovieDetail, setTVShowDetail }) => {
  const handleOnPress = () => {
    switch (type) {
    case ListConstant.MOVIES:
      setMovieDetail(data);
      navigateToMovieDetail();
      break;
    case ListConstant.TV_SHOWS:
      setTVShowDetail(data);
      navigateToTVShowDetail();
      break;
    default:
      break;
    }
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.itemContainer}>
        <View style={styles.imageArea}>
          {_renderImage(data.backdrop_path)}
        </View>
        {_renderInfo(data)}
      </View>
    </TouchableOpacity>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  setMovieDetail: PropTypes.func,
  setTVShowDetail: PropTypes.func,
  navigateToMovieDetail: PropTypes.func,
  navigateToTVShowDetail: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setMovieDetail: (movie) => dispatch(setMovieDetail(movie)),
  setTVShowDetail: (tvshow) => dispatch(setTVShowDetail(tvshow)),
  navigateToMovieDetail: () => dispatch(NavigationActions.navigate({
    routeName: 'Movie Detail'
  })),
  navigateToTVShowDetail: () => dispatch(NavigationActions.navigate({
    routeName: 'TV Show Detail'
  })),
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
