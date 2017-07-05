import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import SearchBar from '../Components/Header/SeachBar';

class SearchScreen extends Component {
  render() {
    return (
      <View>
        <SearchBar />
        <Text>Search screen</Text>
      </View>
    );
  }
}

SearchScreen.propTypes = {

};

export default SearchScreen;
