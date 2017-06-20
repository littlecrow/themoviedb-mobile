import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { reduceText } from '../../Transforms/ReduceText';
import { MoviesActionCreators, MoviesActions } from '../../Redux/Movies';
import MovieListStyles from './Styles/MovieListStyles';

let pageNum = 1;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

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
  }

  render() {
    const { movies, navigate } = this.props;

    return (
      <ScrollView onScroll={this._handleScroll} scrollEventThrottle={5}>
        <List
          containerStyle={MovieListStyles.container}
        >
          {
            movies.map((movie) => (
              <ListItem
                avatar={{uri: `${IMAGE_URL}` + movie.poster_path}}
                avatarStyle={MovieListStyles.avatar}
                key={movie.id}
                title={movie.title}
                subtitle={reduceText(movie.overview)}
                onPress={() => navigate('MovieDetailScreen', {
                  movie: movie
                })}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

MovieList.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MoviesActions.fetchMovies()),
  setPage: (page) => dispath(MoviesActionCreators.setPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
