import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TVShowsActions } from '../../Redux/TVShows';
import List from '../../Components/Grid/List/index';
import styles from './Styles/TVShowsScreenStyles';

class TopVotedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Voted',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <MaterialCommunityIcons name="trending-up" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchTopVotedTVShows } = this.props;
    fetchTopVotedTVShows();
  }

  render() {
    const { tvShows, fetchTopVotedTVShows } = this.props;
    return (
      <View style={styles.container}>
        <List
          data={tvShows}
          onEndReached={fetchTopVotedTVShows}
        />
      </View>
    );
  }
}

TopVotedScreen.propTypes = {
  fetchTopVotedTVShows: PropTypes.func
};

const mapStateToProps = (state) => {
  const tvShowsState = state.tvshows.filter.topVoted;
  return  {
    tvShows: tvShowsState.result
  };
};

TopVotedScreen.propTypes = {
  tvShows: PropTypes.array
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopVotedTVShows: () => dispatch(TVShowsActions.fetchTopVotedTVShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopVotedScreen);
