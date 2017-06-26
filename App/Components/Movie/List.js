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
        onEndReached={() => filterName === MoviesConstant.POPULAR_MOVIES ? fetchPopularMovies() : fetchTopRatedMovies()}
      />
    );
  }

  _showData() {
    const { loading } = this.props;
    return (
      <Image
        source={{uri: 'https://marketplace.canva.com/MAB5WkgFenQ/1/0/thumbnail_large/canva-white-movie-poster-MAB5WkgFenQ.jpg'}}
        style={styles.imgBackground}
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

};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(MoviesActions.fetchPopularMovies()),
  fetTopRatedMovies: () => dispatch(MoviesActions.fetchTopRatedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
