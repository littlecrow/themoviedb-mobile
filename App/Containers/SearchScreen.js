import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import SearchBar from '../Components/Header/SeachBar';
import List from '../Components/ListView';
import styles from './Styles/SearchScreenStyles';
import { SearchActions } from '../Redux/Search';

class SearchScreen extends Component {
  _renderLoading() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderResult() {
    const { result, isSearching, fetchSearching } = this.props;
    if(isSearching) {
      return this._renderLoading();
    } else {
      return result.length === 0
        ? <View style={styles.emptyResult}><Text>No results</Text></View>
        : <List data={result} onEndReached={fetchSearching}/>;
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
  result: PropTypes.array,
  loading: PropTypes.bool,
  isSearching: PropTypes.bool,
  fetchSearching: PropTypes.func
};

const mapStateToProps = (state) => ({
  isSearching: state.search.isSearching,
  loading: state.search.loading,
  result: state.search.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearching: () => dispatch(SearchActions.fetchSearching())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
