import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions,
  FlatList,
  View,
  Text,
  Image
} from 'react-native';
import styles from './Styles/ListStyles';
import { MoviesActionCreators, MoviesActions } from '../../Redux/Movies';
import MovieItem from './ListItem';

let pageNum = 1;

class MovieList extends Component {
  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
  }

  _handleScroll(e) {
    let windowHeight = Dimensions.get('window').height,
      height = e.nativeEvent.contentSize.height,
      offset = e.nativeEvent.contentOffset.y;
    if(windowHeight + offset >= height) {
      this.props.setPage(++pageNum);
      this.props.fetchMovies();
    }
    // let paddingToBottom = 10;
    // paddingToBottom += e.nativeEvent.layoutMeasurement.height;
    // if(e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
    //   this.props.setPage(++pageNum);
    //   this.props.fetchMovies();
    // }
  }

  // _renderEmptyComponent() {
  //   return (
  //     <Image
  //       source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/ad/e4/d6/ade4d6641da6f986b28958bee2daef6c.jpg'}}
  //     >
  //     </Image>
  //   );
  //   // ListEmptyComponent={this._renderEmptyComponent()
  // }

  // _handleScrollToEndBottom() {
  //   this.props.setPage(++pageNum);
  //   this.props.fetchMovies();
  // }

  _renderItem = ({item}) => (
    <MovieItem movie={item}/>
  )
// https://s-media-cache-ak0.pinimg.com/736x/ad/e4/d6/ade4d6641da6f986b28958bee2daef6c.jpg
  _renderLoading = () => (
    <Image
      source={require('../../Images/movie/movie_background.jpg')}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Image
          source={require('../../Images/movie/ring.gif')}
          style={{width: 100, height: 100}}
        />
      </View>
    </Image>
  )

  _renderFulfilled = (movies) => (
    <Image
      source={require('../../Images/movie/movie_background.jpg')}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Image>
  )

  _showData() {
    const { movies } = this.props;
    if(this.props.loading === true) {
      return this._renderLoading();
    } else {
      return this._renderFulfilled(movies);
    }
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

};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
    loading: state.movies.loading
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MoviesActions.fetchMovies()),
  setPage: (page) => dispath(MoviesActionCreators.setPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
