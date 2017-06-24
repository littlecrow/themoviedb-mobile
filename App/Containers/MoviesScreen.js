import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { MoviesConstant, MoviesActionCreators, MoviesActions } from '../Redux/Movies';
import MovieList from '../Components/Movie/List';
import Styles from './Styles/MoviesScreenStyles';
import Filter from './FilterContainer/index';

const ROUTES = [
  { key: '1', title: 'Popular', filterName: MoviesConstant.POPULAR_MOVIES },
  { key: '2', title: 'Top Rated', filterName: MoviesConstant.TOP_RATED_MOVIES },
];

const INITIAL_INDEX = 0;

class MoviesFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Filter/>
    );
  }
}

MoviesFragment.propTypes = {

};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(MoviesFragment);
