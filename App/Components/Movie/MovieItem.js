import React from 'react';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import MovieListStyles from './Styles/MovieListStyles';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { NavigationActionCreators } from '../../Redux/Navigation';
import { reduceText } from '../../Transforms/ReduceText';

const MovieItem = ({ movie, navigateToDetail }) => {
  return (
    <ListItem
      avatar={{uri: `${THEMOVIEDB_IMAGE_SRC}` + movie.poster_path}}
      avatarStyle={MovieListStyles.avatar}
      title={movie.title}
      subtitle={reduceText(movie.overview)}
      onPress={() => navigateToDetail(movie)}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (movie) => dispatch(NavigationActionCreators.navigateToDetailScreen(movie))
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
