import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import TouchableView from '../Components/TouchableView';
import Header from '../Components/Drawer/Header';
import Wrapper from '../Components/Drawer/Wrapper';
import { Colors } from '../Themes';
import styles from './Styles/RootContainerStyles';
import { MoviesActions } from '../Redux/Movies';
import { TVShowsActions } from '../Redux/TVShows';
import { PeopleActions } from '../Redux/People';
import { randomItem } from '../Transforms/RandomItem';

const initial_types = (movie_backdrop, tvshow_backdrop, person_backdrop) => ({
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
      route: 'People',
      backdrop_uri: THEMOVIEDB_IMAGE_SRC + person_backdrop,
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
    this.props.getPopularPersonBackdrops();
  }

  _renderItem(item, index) {
    return (
      <AnimatableView animation={index%2 === 0 ? 'fadeInRight' : 'fadeInLeft'} key={index} style={{flex: 1}}>
        <TouchableView
          onPress={() => this.props.navigateTo(item.route)} style={{flex: 1}}>
          <View style={{ backgroundColor: item.color, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: item.backdrop_uri}} style={styles.backgroundImage}>
              <View style={styles.overlayView}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </Image>
          </View>
        </TouchableView>
      </AnimatableView>
    );
  }

  render() {
    const { movie_backdrops, tvshow_backdrops, person_profiles } = this.props;
    return (
      <Wrapper>
        <Header headerRight={<View/>}/>
        <View style={styles.container}>
          {initial_types(randomItem(movie_backdrops), randomItem(tvshow_backdrops), randomItem(person_profiles)).types.map(this._renderItem)}
        </View>
      </Wrapper>
    );
  }
}

HomeScreen.propTypes = {
  getPopularMovieBackdrops: PropTypes.func,
  getPopularTVShowBackdrops: PropTypes.func,
  getPopularPersonBackdrops: PropTypes.func,
  movie_backdrops: PropTypes.array,
  tvshow_backdrops: PropTypes.array,
  person_profiles: PropTypes.array,
};

const mapStateToProps = (state) => ({
  movie_backdrops: state.movies.backdrops,
  tvshow_backdrops: state.tvshows.backdrops,
  person_profiles: state.people.profiles
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (routeName) => dispatch(NavigationActions.navigate({routeName})),
  getPopularMovieBackdrops: () => dispatch(MoviesActions.fetchPopularMovies()),
  getPopularTVShowBackdrops: () => dispatch(TVShowsActions.fetchPopularTVShows()),
  getPopularPersonBackdrops: () => dispatch(PeopleActions.fetchPopularPeople())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
