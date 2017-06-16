import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { reduceText } from '../../Transforms/ReduceText';

let pageNum = 1;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
  }

  _handleScroll(e) {
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

  render() {
    const { movies } = this.props;
    const { navigate } = this.props;

    return (
      <ScrollView onScroll={this._handleScroll} scrollEventThrottle={5}>
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

MovieList.propTypes = {

};

export default MovieList;
