import React from 'react';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import Rating from 'react-native-star-rating';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import RoundedButton from '../../RoundedButton';
import styles from './Styles/BackdropStyles';
import { MOVIE_KEY } from '../../../Redux/Movie';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';
import CastersList from '../../People/CastersList';
import ReviewsList from '../../Reviews/List';
import { View as AnimatableView, Text as AnimatableText } from 'react-native-animatable';

const ANIMATION_DURATION = 1500;

const _renderMovieInfo = (movie, renderedKey) => {
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
};

const BackdropDetail = props => {
  let detail = props.movie;
  if (props.detail) {
    detail = props.detail;
  }

  const genres = _renderMovieInfo(detail, 'genres');
  const production_countries = _renderMovieInfo(detail, 'production_countries');
  return (
    <View style={styles.container}>
      {detail.backdrop_path ?
        <View style={styles.backdropImageWrapper}>
          <Image source={{uri: THEMOVIEDB_IMAGE_SRC + detail.backdrop_path}} style={styles.backdropImage}/>
        </View>
        : null
      }
      <ScrollView style={styles.blurWrapper}>
        <View style={styles.previewWrapper}>
          <Image resizeMode="contain" source={{uri: THEMOVIEDB_IMAGE_SRC + detail.poster_path}} style={styles.posterImage}/>
          <View style={styles.actionWrapper}>
            <AnimatableView animation="bounceIn" duration={ANIMATION_DURATION} style={styles.actionButton}>
              <RoundedButton
                onPress={() => alert('This feature is not ready yet.')}
                icon={<MaterialIcons name="add-to-queue" size={16} color="white" /> }
                text={'Wish list'}/>
            </AnimatableView>
            <AnimatableView animation="bounceIn" duration={ANIMATION_DURATION} style={styles.actionButton}>
              <RoundedButton
                onPress={() => alert('This feature is not ready yet.')}
                icon={<MaterialIcons name="shopping-cart" size={16} color="white" /> }
                text="Buy"/>
            </AnimatableView>
            <AnimatableText animation="bounceInRight" duration={ANIMATION_DURATION} style={styles.rating}>
              Rating: {detail.vote_average}/10{' '}
              <Text style={{fontSize: fonts.size.small}}>
                ({detail.vote_count})
              </Text>
            </AnimatableText>
            <AnimatableView animation="bounceInRight" duration={ANIMATION_DURATION} >
              <Rating
                disabled={true}
                maxStars={5}
                rating={parseFloat(detail.vote_average) / 2}
                starColor={colors.sunFlower}
                starSize={25}
              />
            </AnimatableView>
          </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.verticalWrapper}>
          <Text style={styles.movieTitle}>
            {detail.title}
          </Text>
          <View style={styles.subInfo}>
            <Text style={styles.whiteText}>Release date:{' '}</Text>
            <Text style={styles.whiteText}>{detail.release_date}</Text>
          </View>
          <View style={styles.subInfo}>
            <Text style={styles.whiteText}>Countries:{' '}</Text>
            {production_countries}
          </View>
          <View style={styles.subInfo}>
            <Text style={styles.whiteText}>Genres:{' '}</Text>
            {genres}
          </View>
          <Text style={styles.subInfoTitle}>
            Plot
          </Text>
          <Text style={styles.whiteText}>
            {detail.overview}
          </Text>
          <Text style={styles.subInfoTitle}>
            Casters
          </Text>
          <View>
            <CastersList data={props.casters}/>
          </View>
          <Text style={styles.subInfoTitle}>
            Reviews
          </Text>
          <View>
            <ReviewsList data={props.reviews}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );

};

BackdropDetail.propTypes = {
  movie: PropTypes.object,
  detail: PropTypes.object,
  casters: PropTypes.array,
  reviews: PropTypes.array
};

const mapStateToProps = state => {
  const { credits, reviews } = state[MOVIE_KEY].current;
  return ({
    casters: credits ? credits.cast : [],
    reviews: reviews ? reviews.results : [],
  });
};


export default connect(mapStateToProps)(BackdropDetail);
