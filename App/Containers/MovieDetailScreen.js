import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { connect } from 'react-redux';
// import { Platform } from 'react-native';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultMovieDetail from '../Components/Movie/Detail/Default';
import BackdropMovieDetail from '../Components/Movie/Detail/Backdrop';
import { MovieActions, MovieActionCreators, MOVIE_KEY } from '../Redux/Movie';

// const isAndroid = Platform.OS === 'android';

class MovieDetailScreen extends Component {

  componentDidMount() {
    const { id } = this.props.detail;
    this.props.fetchDetail(id);
    this.props.fetchCredits(id);
    this.props.fetchReviews(id);
  }

  render () {
    const { detail } = this.props;

    return (
      <AnimatableView animation="slideInUp" duration={300}>
        <TransparentHeader title={detail.title} onBackPress={() => this.props.emptyCurrentMovie()}/>
        <ScrollView>
          {detail.backdrop_path ? <BackdropMovieDetail detail={detail} /> : <DefaultMovieDetail detail={detail} />}
        </ScrollView>
      </AnimatableView>
    );
  }
}

MovieDetailScreen.propTypes = {
  detail: PropTypes.object,
  fetchDetail: PropTypes.func,
  fetchCredits: PropTypes.func,
  fetchReviews: PropTypes.func,
  emptyCurrentMovie: PropTypes.func
};

const mapStateToProps = (state) => ({
  detail: state[MOVIE_KEY].current.detail
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (movieId) => dispatch(MovieActions.fetchDetail(movieId)),
  fetchCredits: (movieId) => dispatch(MovieActions.fetchCredits(movieId)),
  fetchReviews: (movieId) => dispatch(MovieActions.fetchReviews(movieId)),
  emptyCurrentMovie: () => dispatch(MovieActionCreators.emptyCurrentMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
