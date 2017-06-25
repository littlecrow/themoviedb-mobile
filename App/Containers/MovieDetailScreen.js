import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultMovieDetail from '../Components/Movie/Detail/Default';
import BackdropMovieDetail from '../Components/Movie/Detail/Backdrop';
import { MovieActions, MOVIE_KEY } from '../Redux/Movie';

const isAndroid = Platform.OS === 'android';

class MovieDetailScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const movie = navigation.state.params.movie;
    if (isAndroid && movie.backdrop_path) {
      return {
        header: <TransparentHeader title={movie.title} navigation={navigation}/>
      };
    }
    return {
      headerTitle: movie.title,
    };
  };

  componentDidMount() {
    const movie = this.props.navigation.state.params.movie;
    this.props.fetchDetail(movie.id);
    this.props.fetchCredits(movie.id);
    this.props.fetchReviews(movie.id);
  }


  render () {
    let { movie } = this.props.navigation.state.params;
    let detail = null;
    if (this.props.detail) {
      detail = this.props.detail;
    }

    return (
      <ScrollView>
        {movie.backdrop_path ? <BackdropMovieDetail movie={movie} detail={detail} /> : <DefaultMovieDetail movie={movie} />}
      </ScrollView>
    );
  }
}

MovieDetailScreen.propTypes = {
  navigation: PropTypes.object,
  detail: PropTypes.object,
  fetchDetail: PropTypes.func,
  fetchCredits: PropTypes.func,
  fetchReviews: PropTypes.func
};

const mapStateToProps = (state) => ({
  detail: state[MOVIE_KEY].current.detail
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (movieId) => dispatch(MovieActions.fetchDetail(movieId)),
  fetchCredits: (movieId) => dispatch(MovieActions.fetchCredits(movieId)),
  fetchReviews: (movieId) => dispatch(MovieActions.fetchReviews(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
