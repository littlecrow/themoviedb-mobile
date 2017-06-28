import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { NavigationActionCreators } from '../../Redux/Navigation';
import styles from './Styles/ListItemByGridStyles';
import { Images } from '../../Themes';

class ListItemByGrid extends Component {
  _renderImage(image) {
    if (image !== null) {
      return (
        <FitImage
          indicator
          indicatorColor="white"
          indicatorSize="small"
          source={{uri: THEMOVIEDB_IMAGE_SRC + image}}
          resizeMode='cover'
          style={styles.image}
        />
      );
    }
    return <Image source={Images.emptyImage} style={styles.image}/>;
  }

  _renderItem() {
    const { movie, navigateToDetail } = this.props;
    return movie.data.map((item, index) => (
      <TouchableHighlight
        onPress={() => navigateToDetail(item)}
        key={index}
        style={[styles.itemContainer, index === 0 ? styles.firstItem : null, index === movie.data.length - 1 ? styles.lastItem : null]}>
        <View>
          <View>
            <View style={styles.loadingImage}>
              {this._renderImage(item.backdrop_path)}
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <View style={styles.itemContainerLayout}>
        {this._renderItem()}
      </View>
    );
  }
}

ListItemByGrid.propTypes = {

};

ListItemByGrid.propTypes = {
  movie: PropTypes.object,
  navigateToDetail: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (movie) => dispatch(NavigationActionCreators.navigateToDetailScreen(movie))
});

export default connect(undefined, mapDispatchToProps)(ListItemByGrid);
