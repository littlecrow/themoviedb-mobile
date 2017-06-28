import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import FitImage from 'react-native-fit-image';
import PropTypes from 'prop-types';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import Images from '../../Themes/Images';
import styles from './Styles/CastersListStyles';

class CastersList extends Component {

  _renderItem ({item}) {
    const { profile_path } = item;
    let source = Images.default_profile;
    if (profile_path) {
      source = {
        uri: THEMOVIEDB_IMAGE_SRC + item.profile_path
      };
    }
    return (
      <View style={styles.itemContainer}>
        <View style={null}>
          <FitImage
            source={source}
            style={styles.itemImage}
          />
        </View>
        <View style={styles.itemText}>
          <Text style={styles.whiteText}>{item.character} ({item.name})</Text>
        </View>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={item => item.cast_id}
        />
      </View>
    );
  }
}

CastersList.propTypes = {
  data: PropTypes.array
};

export default CastersList;
