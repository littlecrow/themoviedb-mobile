import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import MovieActionCreator from '../Redux/Movies/ActionCreator';

const MAX_LENGTH = 25;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  reduceText (text) {
    let words = text.split(' ');
    let parts = [];
    for(let i=0; i<words.length; i++) {
      if(i < MAX_LENGTH) {
        if(i == MAX_LENGTH - 1)
          parts.push(words[i] + ' ...');
        else
          parts.push(words[i]);
      }
    }

    return parts.join(" ");
  }

  render() {
    const { navigate } = this.props.navigation;
    const movies = this.props.movies;

    return (
      <ScrollView>
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
                subtitle={this.reduceText(movie.overview)}
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
  console.log(state.movies.list)
  return {
    movies: state.movies.list
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchMovies: () => dispath(MovieActionCreator.moviesFetch())
});

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
