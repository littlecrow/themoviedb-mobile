import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Metrics } from '../../Themes';
import styles from './Styles/PeopleViewStyles';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { randomItem } from '../../Transforms/RandomItem';

const { screenWidth, baseMargin } = Metrics;
const backdrop_width = screenWidth - baseMargin * 2,
  backdrop_height = backdrop_width / 2.3;

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
            <Image source={{uri: THEMOVIEDB_IMAGE_SRC + data.profile_path}} style={styles.profileImage}/>
            <Text style={styles.text}>{data.name}</Text>
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
  }
});

PeopleView.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default PeopleView;
