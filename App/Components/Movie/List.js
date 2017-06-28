import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  Image,
  Text
} from 'react-native';
import { Images, Metrics } from '../../Themes';
import styles from './Styles/ListStyles';
import {
  MoviesActions,
  MoviesConstant
} from '../../Redux/Movies';
import MovieItem from './ListItem';
import ListItemByGrid from './ListItemByGrid';

const { itemInRow } = Metrics;

class MovieList extends Component {
  _renderLoadingView = () => (
    <View style={styles.loadingArea}>
      <Image
        source={Images.loadingIcon}
        style={styles.loadingIcon}
      />
    </View>
  )

  _handleList = (list) => {
    let array = [];
    let object = {
      data: []
    };
    list.map((item) => {
      object.data.push(item);
      if(object.data.length === itemInRow) {
        array.push(object);
        object = {
          data: []
        };
      }
    });
    return array;
  }

  _fetchMoreItems = () => {
    const { filterName, fetchPopularMovies, fetchTopVotedMovies, fetchTopRevenueMovies } = this.props;

    switch (filterName) {
    case MoviesConstant.POPULAR_MOVIES:
      fetchPopularMovies();
      break;
    case MoviesConstant.TOP_VOTED_MOVIES:
      fetchTopVotedMovies();
      break;
    case MoviesConstant.TOP_REVENUE_MOVIES:
      fetchTopRevenueMovies();
      break;
    default:
      break;
    }
  }

  _renderItem = ({item}) => <ListItemByGrid movie={item}/>

  _renderListItem = () => {
    const { movies } = this.props;
    return (
      <FlatList
        data={this._handleList(movies)}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
        onEndReachedThreshold={0.5}
        onEndReached={() => this._fetchMoreItems()}
      />
    );
  }

  // uri: 'https://s-media-cache-ak0.pinimg.com/736x/ad/e4/d6/ade4d6641da6f986b28958bee2daef6c.jpg'

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
  fetchPopularMovies: PropTypes.func,
  fetchTopVotedMovies: PropTypes.func,
  fetchTopRevenueMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(MoviesActions.fetchPopularMovies()),
  fetchTopVotedMovies: () => dispatch(MoviesActions.fetchTopVotedMovies()),
  fetchTopRevenueMovies: () => dispatch(MoviesActions.fetchTopRevenueMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
