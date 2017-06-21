import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultMovieDetail from '../Components/Movie/DefaultDetail';
import BackdropMovieDetail from '../Components/Movie/BackdropDetail';

class MovieDetailScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const movie = navigation.state.params.movie;
    if (movie.backdrop_path) {
      return {
        header: <TransparentHeader title={movie.title} navigation={navigation}/>
      };
    }
    return {
      title: movie.title
    };
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { movie } = this.props.navigation.state.params;
    let view;

    if (movie) {
      const isContainBackdrop = movie.backdrop_path;
      view = isContainBackdrop ? <BackdropMovieDetail movie={movie} /> : <DefaultMovieDetail movie={movie} />;
    }
    else {
      view = (
        <DefaultMovieDetail movie={movie}/>
      );
    }
    return (
      <ScrollView>
        {view}
      </ScrollView>
    );
  }
}

MovieDetailScreen.propTypes = {
  navigation: PropTypes.object
};

export default MovieDetailScreen;
