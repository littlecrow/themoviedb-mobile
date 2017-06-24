import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { MoviesActionCreators, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List';
import { NavigationActionTypes } from '../../Redux/Navigation';

class PopularScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Popular'
  }

  componentDidMount() {
    const { setFilter } = this.props;

    setFilter(MoviesConstant.POPULAR_MOVIES);
  }


  render() {
    return (
      <View>
        <MovieList/>
      </View>
    );
  }
}

PopularScreen.propTypes = {

};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(PopularScreen);
