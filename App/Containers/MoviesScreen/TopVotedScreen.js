import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MoviesActions } from '../../Redux/Movies';
import { ListConstant } from '../../Redux/List';
import List from '../../Components/ListView';
import styles from './Styles/MoviesScreenStyles';

class TopVotedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Voted',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <MaterialCommunityIcons name="trending-up" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchTopVotedMovies } = this.props;
    fetchTopVotedMovies();
  }

  render() {
    const { movies, fetchTopVotedMovies } = this.props;
    return (
      <View style={styles.container}>
        <List
          data={movies}
          type={ListConstant.MOVIES}
          onEndReached={fetchTopVotedMovies}
        />
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

TopVotedScreen.propTypes = {
  movies: PropTypes.array
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopVotedMovies: () => dispatch(MoviesActions.fetchTopVotedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopVotedScreen);
