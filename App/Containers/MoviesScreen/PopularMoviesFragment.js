import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { connect } from 'react-redux';
import { MoviesActionCreators, MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/MovieList';

class PopularMoviesFragment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setFilter, fetchMovies } = this.props;
    setFilter(MoviesConstant.POPULAR_MOVIES);
    fetchMovies();
  }

  render() {
    console.log('Popular state: ', this.props.navigation.params);
    return (
      <View>
        <MovieList/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(PopularMoviesFragment);
