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
import { Grid } from 'react-native-elements';
import MovieListStyles from './Styles/ListStyles';
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

  _renderEmptyComponent() {
    return <Text>Loading...</Text>
  }

  // _handleScrollToEndBottom() {
  //   this.props.setPage(++pageNum);
  //   this.props.fetchMovies();
  // }

  _renderItem = ({item}) => (
    <MovieItem movie={item}/>
  )

  _showData() {
    const { movies } = this.props;
    return (
      <Image
        source={{uri: 'https://previews.123rf.com/images/fabiopagani/fabiopagani1505/fabiopagani150500006/39604845-Movie-clapper-on-two-35-mm-cinema-reels-with-film-vertical-frame-on-white-background-Stock-Photo.jpg'}}
      >
        <View style={MovieListStyles.container}>
          <FlatList
            data={movies}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={this._renderEmptyComponent()}
          />
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

};

const mapStateToProps = (state) => {
  console.log('Page: ', state.movies.page);
  return {
    movies: state.movies.list,
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MoviesActions.fetchMovies()),
  setPage: (page) => dispath(MoviesActionCreators.setPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
