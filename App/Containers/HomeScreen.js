import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import Header from '../Components/Drawer/Header';
import Wrapper from '../Components/Drawer/Wrapper';
import { Colors, Images } from '../Themes';
import styles from './Styles/RootContainerStyles';
import { MoviesActions } from '../Redux/Movies';
import { TVShowsActions } from '../Redux/TVShows';

const initial_types = (movie_backdrop, tvshow_backdrop) => ({
  types: [
    {
      name: 'Movies',
      route: 'Movies',
      backdrop_uri: THEMOVIEDB_IMAGE_SRC + movie_backdrop,
      color: Colors.sunFlower
    },
    {
      name: 'TV Shows',
      route: 'TV Shows',
      backdrop_uri: THEMOVIEDB_IMAGE_SRC + tvshow_backdrop,
      color: Colors.peterRiver
    },
    {
      name: 'People',
      route: 'Login',
      backdrop_uri: 'https://www.google.com.vn/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj_-sG8uqLVAhVHgrwKHRG7D2EQjRwIBw&url=https%3A%2F%2Fwww.pixelstalk.net%2Fdownload-free-actor-background%2F&psig=AFQjCNGDW7FGFbPLUhvF9WWXnIYBYOVEzQ&ust=1501004186155780',
      color: Colors.alizarin
    }
  ]
});

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    this.props.getPopularMovieBackdrops();
    this.props.getPopularTVShowBackdrops();
  }

  _randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  _renderItem(item, index) {
    return (
      <AnimatableView animation="fadeInDown" key={index} style={{flex: 1}}>
        <TouchableNativeFeedback
          onPress={() => this.props.navigateTo(item.route)}
          background={TouchableNativeFeedback.Ripple(Colors.secondary, true)}>
          <View style={{ backgroundColor: item.color, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: item.backdrop_uri}} style={styles.backgroundImage}>
              <View style={styles.overlayView}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </Image>
          </View>
        </TouchableNativeFeedback>
      </AnimatableView>
    );
  }

  render() {
    const { movie_backdrops, tvshow_backdrops } = this.props;
    return (
      <Wrapper>
        <Header headerRight={<View/>}/>
        <View style={styles.container}>
          {initial_types(this._randomItem(movie_backdrops), this._randomItem(tvshow_backdrops)).types.map(this._renderItem)}
        </View>
      </Wrapper>
    );
  }
}

HomeScreen.propTypes = {
  getPopularMovieBackdrops: PropTypes.func,
  getPopularTVShowBackdrops: PropTypes.func,
  movie_backdrops: PropTypes.array,
  tvshow_backdrops: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie_backdrops: state.movies.backdrops,
  tvshow_backdrops: state.tvshows.backdrops
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (routeName) => dispatch(NavigationActions.navigate({routeName})),
  getPopularMovieBackdrops: () => dispatch(MoviesActions.fetchPopularMovies()),
  getPopularTVShowBackdrops: () => dispatch(TVShowsActions.fetchPopularTVShows())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
