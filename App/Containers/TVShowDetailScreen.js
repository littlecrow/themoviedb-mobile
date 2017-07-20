import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import TransparentHeader from '../Components/Header/Transparent';
import DefaultTVShowDetail from '../Components/TVShow/Detail/Default';
import BackdropTVShowDetail from '../Components/TVShow/Detail/Backdrop';
import { TVShowActions, TVShowActionCreators, TV_SHOW_KEY } from '../Redux/TVShow';
import styles from './Styles/TVShowDetailScreenStyles';

class TVShowDetailScreen extends Component {

  componentDidMount() {
    const { id } = this.props.detail;
    this.props.fetchDetail(id);
    this.props.fetchCredits(id);
  }

  render () {
    const { detail } = this.props;
    if (detail) {
      this.tvshow = detail;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {this.tvshow.backdrop_path ? <BackdropTVShowDetail detail={this.tvshow} /> : <DefaultTVShowDetail detail={this.tvshow} />}
        </ScrollView>
        <View style={styles.header}>
          <TransparentHeader title={this.tvshow.name} onBackPress={() => this.props.emptyCurrentTVShow()}/>
        </View>
      </View>
    );
  }
}

TVShowDetailScreen.propTypes = {
  detail: PropTypes.object,
  fetchDetail: PropTypes.func,
  fetchCredits: PropTypes.func,
  fetchReviews: PropTypes.func,
  emptyCurrentTVShow: PropTypes.func
};

const mapStateToProps = (state) => ({
  detail: state[TV_SHOW_KEY].current.detail || null
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (tvshowId) => dispatch(TVShowActions.fetchDetail(tvshowId)),
  fetchCredits: (tvshowId) => dispatch(TVShowActions.fetchCredits(tvshowId)),
  emptyCurrentTVShow: () => dispatch(TVShowActionCreators.emptyCurrentTVShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(TVShowDetailScreen);
