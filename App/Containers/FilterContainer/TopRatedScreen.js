import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { MoviesActions, MoviesActionCreators, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';

class TopRatedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Rated'
  }

  componentDidMount() {
    const { setFilter, fetchMovies } = this.props;

    setFilter(MoviesConstant.TOP_RATED_MOVIES);
    fetchMovies();
  }

  render() {
    return (
      <View>
        <MovieList/>
      </View>
    );
  }
}

TopRatedScreen.propTypes = {

};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(TopRatedScreen);
