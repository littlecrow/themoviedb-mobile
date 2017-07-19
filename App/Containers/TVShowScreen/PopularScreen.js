import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TVShowsActions } from '../../Redux/TVShows';
import List from '../../Components/Grid/List/index';
import styles from './Styles/TVShowsScreenStyles';

class PopularScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Popular',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <Ionicons name="md-globe" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchPopularTVShows } = this.props;
    fetchPopularTVShows();
  }

  render() {
    const { tvShows, fetchPopularTVShows } = this.props;
    return (
      <View style={styles.container}>
        <List
          data={tvShows}
          onEndReached={fetchPopularTVShows}
        />
      </View>
    );
  }
}

PopularScreen.propTypes = {
  tvShows: PropTypes.array,
  fetchPopularTVShows: PropTypes.func
};

const mapStateToProps = (state) => {
  const tvShowsState = state.tvshows.filter.popular;
  return  {
    tvShows: tvShowsState.result
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularTVShows: () => dispatch(TVShowsActions.fetchPopularTVShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen);
