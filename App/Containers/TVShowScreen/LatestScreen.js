import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TVShowsActions } from '../../Redux/TVShows';
import List from '../../Components/Grid/List/index';
import styles from './Styles/TVShowsScreenStyles';

class LatestScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Latest',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <Ionicons name="md-globe" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchLatestTVShows } = this.props;
    fetchLatestTVShows();
  }

  render() {
    const { tvShows, fetchLatestTVShows } = this.props;
    return (
      <View style={styles.container}>
        <List
          data={tvShows}
          onEndReached={fetchLatestTVShows}
        />
      </View>
    );
  }
}

LatestScreen.propTypes = {
  tvShows: PropTypes.array,
  fetchLatestTVShows: PropTypes.func
};

const mapStateToProps = (state) => {
  const tvShowsState = state.tvshows.filter.latest;
  return  {
    tvShows: tvShowsState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLatestTVShows: () => dispatch(TVShowsActions.fetchLatestTVShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestScreen);
