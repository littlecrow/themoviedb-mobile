import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MoviesActions } from '../../Redux/Movies';
import List from '../../Components/Grid/List/index';
import styles from './Styles/MoviesScreenStyles';

class PopularScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Popular',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <Ionicons name="md-globe" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchPopularMovies } = this.props;
    fetchPopularMovies();
  }

  render() {
    const { movies, fetchPopularMovies } = this.props;
    return (
      <View style={styles.container}>
        <List
          data={movies}
          onEndReached={fetchPopularMovies}
        />
      </View>
    );
  }
}

PopularScreen.propTypes = {
  movies: PropTypes.array,
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
