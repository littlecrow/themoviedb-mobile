import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView, Dimensions, Picker } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import MovieActionCreator from '../Redux/Movies/ActionCreator';
import { reduceText } from '../Transforms/ReduceText';

let pageNum = 1;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

    /*
    - P: Popular
    - TR: Top Rated
    */
    this.state = {
      filterByTrend: 'P'
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
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

  handleValueChange(value) {
    this.setState({
      filterByTrend: value
    }, () => {
      const { fetchMovies, setFilter } = this.props,
        { filterByTrend } = this.state;
      setFilter(filterByTrend);
      fetchMovies();
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const movies = this.props.movies;
    const { filterByTrend } = this.state;

    return (
      <View>
        <View>
          <Picker
            selectedValue={filterByTrend}
            onValueChange={(value) => { this.handleValueChange(value); }}
          >
            <Picker.Item label={'Popular'} value={'P'}/>
            <Picker.Item label={'Top Rated'} value={'TR'}/>
          </Picker>
        </View>
        <ScrollView onScroll={this.handleScroll} scrollEventThrottle={5}>
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
      </View>
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
  setPage: (page) => dispath(MovieActionCreator.setPage(page)),
  setFilter: (filter) => dispath(MovieActionCreator.setFilter(filter))
});

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
