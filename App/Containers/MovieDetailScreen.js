import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultMovieDetail from '../Components/Movie/Detail/Default';
import BackdropMovieDetail from '../Components/Movie/Detail/Backdrop';
import { MovieActions, MovieActionCreators, MOVIE_KEY } from '../Redux/Movie';
import styles from './Styles/MovieDetailScreenStyles';

class MovieDetailScreen extends Component {

  componentDidMount() {
    const { id } = this.props.detail;
    this.props.fetchDetail(id);
    this.props.fetchCredits(id);
    this.props.fetchReviews(id);
  }

  render () {
    const { detail } = this.props;
    if (detail) {
      this.movie = detail;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {this.movie.backdrop_path ? <BackdropMovieDetail detail={this.movie} /> : <DefaultMovieDetail detail={this.movie} />}
        </ScrollView>
        <View style={styles.header}>
          <TransparentHeader title={this.movie.title} onBackPress={() => this.props.emptyCurrentMovie()}/>
        </View>
      </View>
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
  detail: state[MOVIE_KEY].current.detail || null
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (movieId) => dispatch(MovieActions.fetchDetail(movieId)),
  fetchCredits: (movieId) => dispatch(MovieActions.fetchCredits(movieId)),
  fetchReviews: (movieId) => dispatch(MovieActions.fetchReviews(movieId)),
  emptyCurrentMovie: () => dispatch(MovieActionCreators.emptyCurrentMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
