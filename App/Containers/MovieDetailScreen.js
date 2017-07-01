import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultMovieDetail from '../Components/Movie/Detail/Default';
import BackdropMovieDetail from '../Components/Movie/Detail/Backdrop';
import { MovieActions, MOVIE_KEY } from '../Redux/Movie';

// const isAndroid = Platform.OS === 'android';

class MovieDetailScreen extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDetail(id);
    this.props.fetchCredits(id);
    this.props.fetchReviews(id);
  }


  render () {
    let movie = {
      id: this.props.match.params.id,
      title: 'Default'
    };
    let detail = {};
    if (this.props.detail) {
      detail = this.props.detail;
    }

    return (
      <View>
        <TransparentHeader title={detail.title || movie.title}/>
        <ScrollView>
          {(movie.backdrop_path || detail.backdrop_path) ? <BackdropMovieDetail movie={movie} detail={detail} /> : <DefaultMovieDetail movie={movie} />}
        </ScrollView>
      </View>
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
