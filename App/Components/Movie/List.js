import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  Image
} from 'react-native';
import styles from './Styles/ListStyles';
import {
  MoviesActions,
  MoviesConstant
} from '../../Redux/Movies';
import MovieItem from './ListItem';

class MovieList extends Component {
  _renderLoadingView = () => (
    <View style={styles.loadingArea}>
      <Image
        source={require('../../Images/movie/ring.gif')}
        style={styles.loadingIcon}
      />
    </View>
  )

  _renderItem = ({item}) => <MovieItem movie={item}/>

  _renderListItem = () => {
    const { filterName, movies, fetchPopularMovies, fetchTopRatedMovies } = this.props;
    return (
      <FlatList
        data={movies}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          switch(filterName) {
          case MoviesConstant.POPULAR_MOVIES:
            fetchPopularMovies();
            break;
          case MoviesConstant.TOP_RATED_MOVIES:
            fetchTopRatedMovies();
            break;
          }
        }}
      />
    );
  }

  _showData() {
    return (
      <Image
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/ad/e4/d6/ade4d6641da6f986b28958bee2daef6c.jpg'}}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          {this._renderListItem()}
        </View>
      </Image>
    );
  }

  render() {
    return (
      <View>
        {this._showData()}
      </View>
    );
  }
}

MovieList.propTypes = {
  filterName: PropTypes.string,
  movies: PropTypes.array,
  fetchPopularMovies: PropTypes.func,
  fetchTopRatedMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(MoviesActions.fetchPopularMovies()),
  fetchTopRatedMovies: () => dispatch(MoviesActions.fetchTopRatedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
