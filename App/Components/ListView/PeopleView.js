import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Metrics } from '../../Themes';
import styles from './Styles/PeopleViewStyles';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { randomItem } from '../../Transforms/RandomItem';
import { roundNum } from '../../Transforms/RoundNumber';

const { screenWidth, baseMargin } = Metrics;
const backdrop_width = screenWidth - baseMargin * 2,
  backdrop_height = backdrop_width / 3;
const profile_height = backdrop_height,
  profile_width = profile_height * 0.67;

class PeopleView extends Component {
  _getMovieBackdrops(data) {
    let backdrops = [];
    data.known_for.forEach(item => {
      backdrops.push(item.backdrop_path);
    });
    return backdrops;
  }

  render() {
    const { data, index } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: THEMOVIEDB_IMAGE_SRC + randomItem(this._getMovieBackdrops(data))}} style={[flexibleStyles.backdrop, index === 0 ? styles.firstItem : null]}>
          <View style={styles.info}>
            <Image source={{uri: THEMOVIEDB_IMAGE_SRC + data.profile_path}} style={flexibleStyles.profileImage}/>
            <View style={styles.basicInfo}>
              <Text style={[styles.text, styles.name]}>{data.name}</Text>
              <Text style={[styles.text, styles.popularity]}>{roundNum(data.popularity / 10, 1)}/10</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const flexibleStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    width: backdrop_width,
    height: backdrop_height,
    marginHorizontal: baseMargin,
    marginTop: baseMargin 
  },
  profileImage: {
    width: profile_width,
    height: profile_height,
  },
});

PeopleView.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default PeopleView;
