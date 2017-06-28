import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';

class TopVotedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Voted'
  }

  componentDidMount() {
    const { fetchTopVotedMovies } = this.props;

    fetchTopVotedMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <View>
        <MovieList movies={movies} filterName={MoviesConstant.VOTE_AVERAGE_DESC}/>
      </View>
    );
  }
}

TopVotedScreen.propTypes = {
  fetchTopVotedMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.topVoted;

  return  {
    movies: moviesState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopVotedMovies: () => dispatch(MoviesActions.fetchTopVotedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopVotedScreen);
