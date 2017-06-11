import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Button} from 'react-native';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Movies page</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: []
  };
};

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, undefined)(MoviesScreen);
