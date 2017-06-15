import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, Dimensions } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import MovieActionCreator from '../Redux/Movies/ActionCreator';
import { reduceText } from '../Transforms/ReduceText';

let pageNum = 1;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    /*
    - e.nativeEvent.contentOffset.y for vertical scrollView
    - e.nativeEvent.contentOffset.x for horizontal scrollView
    */
    let windowHeight = Dimensions.get('window').height,
      height = e.nativeEvent.contentSize.height,
      offset = e.nativeEvent.contentOffset.y;

    if(windowHeight + offset >= height) {
      this.props.setPage(++pageNum);
      this.props.fetchMovies();
    }
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { navigate } = this.props.navigation;
    const movies = this.props.movies;

    return (
      <ScrollView onScroll={this.handleScroll}>
        <List>
          {
            movies.map((movie) => (
              <ListItem
                avatar={{uri: `${IMAGE_URL}` + movie.poster_path}}
                avatarStyle={{
                  width: 70,
                  height: 100
                }}
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MovieActionCreator.moviesFetch()),
  setPage: (page) => dispath(MovieActionCreator.setPage(page))
});

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
