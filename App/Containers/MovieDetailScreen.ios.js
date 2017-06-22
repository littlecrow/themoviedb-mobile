import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DefaultMovieDetail from '../Components/Movie/DefaultDetail';
import BackdropMovieDetail from '../Components/Movie/BackdropDetail';
import { MovieActions, MOVIE_KEY } from '../Redux/Movie';


class MovieDetailScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const movie = navigation.state.params.movie;
    return {
      title: movie.title
    };
  };

  constructor(props) {
    super(props);

    const movie = this.props.navigation.state.params.movie;
    this.props.fetchDetail(movie.id);
  }

  render () {
    let { movie } = this.props.navigation.state.params;

    if (this.props.movie) {
      movie = this.props.movie;
    }

    return (
      <ScrollView>
        {movie.backdrop_path ? <BackdropMovieDetail movie={movie} /> : <DefaultMovieDetail movie={movie} />}
      </ScrollView>
    );
  }
}

MovieDetailScreen.propTypes = {
  navigation: PropTypes.object,
  movie: PropTypes.object,
  fetchDetail: PropTypes.func
};

const mapStateToProps = (state) => ({
  movie: state[MOVIE_KEY].current
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (movieId) => dispatch(MovieActions.fetchMovies(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
