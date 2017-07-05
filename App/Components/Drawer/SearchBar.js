import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ history }) => {
  const _handlePress = () => {
    history.push('/movies/search');
  }

  return (
    <TouchableOpacity
      onPress={() => _handlePress()}
    >
      <EvilIcons name='search' size={28} color='white'/>
    </TouchableOpacity>
  );
};

SearchBar.propTypes = {
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired
};

export default withRouter(SearchBar);
