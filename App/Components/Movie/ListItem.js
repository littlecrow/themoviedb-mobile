import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import MoviesItemStyles from './Styles/ListItemStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

const MovieItem = ({ movie, navigateToDetail }) => {
  return (
    <TouchableHighlight onPress={() => navigateToDetail(movie)}>
      <View style={MoviesItemStyles.itemContainer}>
        <View style={MoviesItemStyles.imgArea}>
          <Image source={{uri: `${THEMOVIEDB_IMAGE_SRC}` + movie.poster_path}}
            style={{width: '100%', height: '100%'}}/>
        </View>
        <View style={MoviesItemStyles.infoArea}>
          <Text style={MoviesItemStyles.text}>{movie.title}</Text>
          <Text style={MoviesItemStyles.text}>Rating: {movie.vote_average}/10</Text>
        </View>
      </View>
    </TouchableHighlight>
    // <ListItem
    //   avatar={{uri: `${THEMOVIEDB_IMAGE_SRC}` + movie.poster_path}}
    //   avatarStyle={MovieListStyles.avatar}
    //   title={movie.title}
    //   subtitle={reduceText(movie.overview)}
    //   onPress={() => navigateToDetail(movie)}
    // />

    // <View>
    //   <Text>{movie.title}</Text>
    // </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (movie) => dispatch(NavigationActionCreators.navigateToDetailScreen(movie))
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
