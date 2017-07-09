import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List/List';

class TopRevenueScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Revenue',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <MaterialIcons name="attach-money" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchTopRevenueMovies } = this.props;
    fetchTopRevenueMovies();
  }

  render() {
    const { movies, fetchTopRevenueMovies } = this.props;
    return (
      <View>
        <MovieList
          movies={movies}
          onEndReached={fetchTopRevenueMovies}
        />
      </View>
    );
  }
}

TopRevenueScreen.propTypes = {
  movies: PropTypes.array,
  fetchTopRevenueMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.topRevenue;
  return  {
    movies: moviesState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopRevenueMovies: () => dispatch(MoviesActions.fetchTopRevenueMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRevenueScreen);
