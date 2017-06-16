import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Picker } from 'react-native';
import { MoviesActionCreators, MoviesActions, MoviesConstant } from '../Redux/Movies';
import MovieList from '../Components/Movie/List';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterByTrend: MoviesConstant.POPULAR_MOVIES
    };

    this._handleValueChange = this._handleValueChange.bind(this);

    this.onInitComponen();
  }

  onInitComponen() {
    //
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  _handleValueChange(value) {
    this.setState({
      filterByTrend: value
    }, () => {
      const { fetchMovies, setFilter } = this.props,
        { filterByTrend } = this.state;
      setFilter(filterByTrend);
      fetchMovies();
    });
  }

  render() {
    const { movies } = this.props;
    const { filterByTrend } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Picker
          selectedValue={filterByTrend}
          onValueChange={(value) => { this._handleValueChange(value); }}
        >
          <Picker.Item label={'Popular'} value={MoviesConstant.POPULAR_MOVIES}/>
          <Picker.Item label={'Top Rated'} value={MoviesConstant.TOP_RATED_MOVIES}/>
        </Picker>
        <MovieList
          movies={ movies }
          navigate={ navigate }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
    page: state.movies.page,
    filter: state.movies.filter
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MoviesActions.fetchMovies()),
  fetchFilterMovies: () => dispath(MoviesActionCreators.moviesFetchFilter()),
  setPage: (page) => dispath(MoviesActionCreators.setPage(page)),
  setFilter: (filter) => dispath(MoviesActionCreators.setFilter(filter))
});

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
