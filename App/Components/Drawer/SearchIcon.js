import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchIcon = ({ navigateToSearching }) => {
  return (
    <TouchableOpacity onPress={navigateToSearching}>
      <EvilIcons name='search' size={28} color='white'/>
    </TouchableOpacity>
  );
};

SearchIcon.propTypes = {
  navigateToSearching: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  navigateToSearching: () => dispatch(NavigationActions.navigate({
    routeName: 'Search'
  }))
});

export default connect(undefined, mapDispatchToProps)(SearchIcon);
