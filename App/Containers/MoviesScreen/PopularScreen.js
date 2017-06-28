import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';

class PopularScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Popular'
  }

  componentDidMount() {
    const { fetchPopularMovies } = this.props;

    fetchPopularMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <View>
        <MovieList movies={movies} filterName={MoviesConstant.POPULARITY_DESC}/>
      </View>
    );
  }
}

PopularScreen.propTypes = {
  fetchPopularMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.popular;

  return  {
    movies: moviesState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(MoviesActions.fetchPopularMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen);
