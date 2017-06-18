import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { connect } from 'react-redux';
import { MoviesActionCreators, MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/MovieList';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class PopularMoviesFragment extends Component {
  constructor(props) {
    super(props);

    this.handlePressOnTab = this.handlePressOnTab.bind(this);
  }

  componentDidMount() {
    const { setFilter, fetchMovies } = this.props;
    setFilter(MoviesConstant.POPULAR_MOVIES);
    fetchMovies();
  }

  handlePressOnTab() {
    console.log('You press me!');
  }

  render() {
    return (
      <View>
        <Text>Mobile</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(PopularMoviesFragment);
