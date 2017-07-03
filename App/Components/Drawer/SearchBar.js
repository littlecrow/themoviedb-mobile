import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { NavigationActionCreators } from '../../Redux/Navigation';

class SearchBar extends Component {
  render() {
    const { navigateToSearchScreen } = this.props;

    return (
      <TouchableOpacity
        onPress={() => navigateToSearchScreen()}
      >
        <EvilIcons name='search' size={28} color='white'/>
      </TouchableOpacity>
    );
  }
}

SearchBar.propTypes = {
  navigateToSearchScreen: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  navigateToSearchScreen: () => dispatch(NavigationActionCreators.navigateToSearchScreen())
});

export default connect(undefined, mapDispatchToProps)(SearchBar);
