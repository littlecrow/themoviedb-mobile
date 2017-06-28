import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';

class TopRatedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Rated',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <MaterialCommunityIcons name="trending-up" size={24} color={tintColor} />
      </View>
    ),
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
  fetchTopRatedMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.topRated;

  return  {
    movies: moviesState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopRatedMovies: () => dispatch(MoviesActions.fetchTopRatedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedScreen);
