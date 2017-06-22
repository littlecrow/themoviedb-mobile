import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Rating from 'react-native-star-rating';
import FitImage from 'react-native-fit-image';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import RoundedButton from '../RoundedButton';
import styles from './Styles/BackdropDetailStyles';
import colors  from '../../Themes/Colors';
import fonts  from '../../Themes/Fonts';

class BackdropMovieDetail extends Component {

  _renderMovieInfo (movie, renderedKey) {
    if (movie[renderedKey]) {
      const { length } = movie[renderedKey];
      const str = movie[renderedKey].map((item, index) => {
        if (index == (length - 1))
          return `${item.name}.`;
        return `${item.name}, `;
      });
      return <Text style={styles.whiteText}>{str}</Text>;
    }
    return <ActivityIndicator/>;
  }
  render() {
    const { movie } = this.props;

    const genres = this._renderMovieInfo(movie, 'genres');
    const production_companies = this._renderMovieInfo(movie, 'production_companies');
    const production_countries = this._renderMovieInfo(movie, 'production_countries');

    return (
      <View style={styles.container}>
        <View style={styles.backdropImageWrapper}>
          <FitImage source={{uri: THEMOVIEDB_IMAGE_SRC + movie.backdrop_path}} style={styles.backdropImage}/>
        </View>
        <View style={styles.blurWrapper}>
          <View style={styles.previewWrapper}>
            <FitImage resizeMode="contain" source={{uri: THEMOVIEDB_IMAGE_SRC + movie.poster_path}} style={styles.posterImage}/>
            <View style={styles.actionWrapper}>
              <View style={styles.actionButton}>
                <RoundedButton
                  onPress={() => alert('This feature is not ready yet.')}
                  icon={<MaterialIcons name="add-to-queue" size={16} color="white" /> }
                  text={'Wish list'}/>
              </View>
              <View style={styles.actionButton}>
                <RoundedButton
                  onPress={() => alert('This feature is not ready yet.')}
                  icon={<MaterialIcons name="shopping-cart" size={16} color="white" /> }
                  text="Buy"/>
              </View>
              <Text style={styles.rating}>
                Rating: {movie.vote_average}/10{' '}
                <Text style={{fontSize: fonts.size.small}}>
                  ({movie.vote_count})
                </Text>
              </Text>
              <View>
                <Rating
                  disabled={true}
                  maxStars={5}
                  rating={parseFloat(movie.vote_average) / 2}
                  starColor={colors.sunFlower}
                  starSize={25}
                />
              </View>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.verticalWrapper}>
            <Text style={styles.movieTitle}>
              {movie.title}
            </Text>
            <View style={styles.movieSubInfo}>
              <Text style={styles.whiteBoldText}>Release date:{' '}</Text>
              <Text style={styles.whiteText}>{movie.release_date}</Text>
            </View>
            <View style={styles.movieSubInfo}>
              <Text style={styles.whiteBoldText}>Countries:{' '}</Text>
              {production_countries}
            </View>
            <View style={styles.movieSubInfo}>
              <Text style={styles.whiteBoldText}>Genres:{' '}</Text>
              {genres}
            </View>
            <Text style={styles.movieOverviewTitle}>
              Plot
            </Text>
            <Text style={styles.movieOverview}>
              {movie.overview}
            </Text>
            <Text style={styles.movieOverviewTitle}>
              Productions:
            </Text>
            <View style={styles.movieOverview}>
              {production_companies}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

BackdropMovieDetail.propTypes = {
  movie: PropTypes.object
};

export default BackdropMovieDetail;
