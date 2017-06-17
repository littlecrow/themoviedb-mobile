import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesScreen from './MoviesScreen';

class PopularMoviesScreen extends MoviesScreen {
  onInitComponent() {
    super.onInitComponent();
    console.log('Popular');
  }
}

PopularMoviesScreen.propTypes = {

};

export default PopularMoviesScreen;
