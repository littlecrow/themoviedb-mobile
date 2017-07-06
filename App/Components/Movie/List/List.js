import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { Images } from '../../../Themes';
import styles from './Styles/ListStyles';
import { handleList } from '../../../Transforms/ListConverter';
import {
  MoviesActions,
  MoviesConstant
} from '../../../Redux/Movies';
import DefaultItems from '../ListItem/Default';
import GridItems from '../ListItem/Grid';

class MovieList extends Component {
  _fetchMoreItems() {
    const { filterName, fetchPopularMovies, fetchTopVotedMovies, fetchTopRevenueMovies } = this.props;
    switch (filterName) {
    case MoviesConstant.POPULARITY_DESC:
      fetchPopularMovies();
      break;
    case MoviesConstant.VOTE_AVERAGE_DESC:
      fetchTopVotedMovies();
      break;
    case MoviesConstant.REVENUE_DESC:
      fetchTopRevenueMovies();
      break;
    default:
      break;
    }
  }

  _renderFooter() {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderItem = ({item}) => {
    const { itemsPerRow } = this.props;
    if(itemsPerRow === 1) {
      return <DefaultItems movie={item}/>;
    }
    return <GridItems movie={item}/>;
  }

  _renderListItem() {
    const { movies, itemsPerRow } = this.props;
    return (
      <FlatList
        data={itemsPerRow === 1 ? movies : handleList(movies, itemsPerRow)}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
        ListFooterComponent={this._renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={() => this._fetchMoreItems()}
      />
    );
  }

  _showData() {
    return (
      <Image
        source={Images.defaultBackground}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          {this._renderListItem()}
        </View>
      </Image>
    );
  }

  render() {
    return (
      <View>
        {this._showData()}
      </View>
    );
  }
}

MovieList.propTypes = {
  filterName: PropTypes.string,
  movies: PropTypes.array,
  itemsPerRow: PropTypes.number,
  fetchPopularMovies: PropTypes.func,
  fetchTopVotedMovies: PropTypes.func,
  fetchTopRevenueMovies: PropTypes.func
};

const mapStateToProps = (state) => ({
  itemsPerRow: state.list.quantity
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(MoviesActions.fetchPopularMovies()),
  fetchTopVotedMovies: () => dispatch(MoviesActions.fetchTopVotedMovies()),
  fetchTopRevenueMovies: () => dispatch(MoviesActions.fetchTopRevenueMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
