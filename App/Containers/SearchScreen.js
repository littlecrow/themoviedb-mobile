import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import SearchBar from '../Components/Header/SeachBar';
import MovieList from '../Components/Movie/List/List';
import styles from './Styles/SearchScreenStyles';

class SearchScreen extends Component {
  _renderLoading() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderResult() {
    const { movies, isSearching } = this.props;
    if(isSearching) {
      return this._renderLoading();
    } else {
      return movies.length === 0
        ? <View style={styles.emptyResult}><Text>No results</Text></View>
        : <MovieList movies={movies}/>;
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <SearchBar />
        {loading ? this._renderLoading() : this._renderResult()}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  isSearching: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isSearching: state.search.isSearching,
  loading: state.search.loading,
  movies: state.search.list
});

export default connect(mapStateToProps, undefined)(SearchScreen);
