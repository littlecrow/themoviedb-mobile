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

    this.state = {
      index: INITIAL_INDEX,
      routes: ROUTES
    };

    this._handleTabChanged = this._handleTabChanged.bind(this);
    this._dispatchActions = this._dispatchActions.bind(this);
  }

  _renderScene = SceneMap({
    [ROUTES[0].key]: () => <MovieList/>,
    [ROUTES[1].key]: () => <MovieList/>,
  });

  componentDidMount() {
    this._dispatchActions(INITIAL_INDEX);
  }

  _dispatchActions(index) {
    this.props.setFilter(ROUTES[index].filterName);
    this.props.fetchMovies();
  }

  _handleTabChanged(index) {
    this.setState({
      index
    });

    this._dispatchActions(index);
  }

  _renderHeader(props) {
    return (
      <TabBar
        {...props}
        tabStyle={Styles.tabContent}
        indicatorStyle={Styles.indicator}
        labelStyle={Styles.tabLabel}
        style={Styles.tabBar}
      />
    );
  }

  render() {
    return (
      // <TabViewAnimated
      //   style={Styles.container}
      //   navigationState={this.state}
      //   renderScene={this._renderScene}
      //   renderHeader={this._renderHeader}
      //   onRequestChangeTab={this._handleTabChanged}
      // />
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
