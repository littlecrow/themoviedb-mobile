import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';

class TopRatedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Rated'
  }

  componentDidMount() {
    const { fetchTopRatedMovies } = this.props;

    fetchTopRatedMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <View>
        <MovieList movies={movies} filterName={MoviesConstant.TOP_RATED_MOVIES}/>
      </View>
    );
  }
}

TopRatedScreen.propTypes = {

};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.topRated;

  return  {
    movies: moviesState.result[0]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopRatedMovies: () => dispatch(MoviesActions.fetchTopRatedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedScreen);
