import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { NavigationActions } from 'react-navigation';
import { Images, Metrics } from '../../../Themes';
import styles from './Styles/GridStyles';
import { setMovieDetail } from '../../../Redux/Movie/ActionCreators';

const { screenWidth, smallMargin } = Metrics;
/*
Calculate width for each item:
Based on: itemsPerRow, itemMarginLeftRight, screenWidth
=> marginBetweenItems (left, right) = itemMarginLeftRight * 2 * itemsPerRow
=> itemWidth = (screenWidth - marginBetweenItems) / itemsPerRow
 */

class GridItems extends Component {
  _calculateMetrics() {
    const { itemsPerRow } = this.props;
    let itemWidth = (screenWidth - (smallMargin * 2 * itemsPerRow)) / itemsPerRow;
    return {
      itemWidth: itemWidth,
      imageWidth: itemWidth,
      imageHeight: itemWidth / 1.8
    };
  }

  _renderImage(image) {
    if (image !== null) {
      return (
        <Image
          source={{uri: THEMOVIEDB_IMAGE_SRC + image}}
          style={styles.image}
        />
      );
    }
    return <Image source={Images.emptyImage} style={styles.image}/>;
  }

  _renderInfo(item) {
    const style = StyleSheet.create({
      loadingImage: {
        height: this._calculateMetrics().imageHeight
      }
    });
    return (
      <View>
        <View style={[styles.loadingImage, style.loadingImage]}>
          {this._renderImage(item.backdrop_path)}
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
    );
  }

  _renderItem() {
    const style = StyleSheet.create({
      itemContainer: {
        width: this._calculateMetrics().itemWidth
      }
    });
    const { movie, navigateToDetail, setMovieDetail } = this.props;
    const handleItemPress = (item) => {
      setMovieDetail(item);
      navigateToDetail();
    };
    return movie.data.map((item, index) => (
      <TouchableHighlight onPress={() => handleItemPress(item)} key={index}
        style={[
          styles.itemContainer,
          style.itemContainer,
          index === 0 ? styles.firstItem : null,
          index === movie.data.length - 1 ? styles.lastItem : null
        ]}>{this._renderInfo(item)}
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

GridItems.propTypes = {
  movie: PropTypes.object,
  itemsPerRow: PropTypes.number,
  setMovieDetail: PropTypes.func,
  navigateToDetail: PropTypes.func,
};

const mapStateToProps = (state) => ({
  itemsPerRow: state.list.quantity
});

const mapDispatchToProps = (dispatch) => ({
  setMovieDetail: (movie) => dispatch(setMovieDetail(movie)),
  navigateToDetail: () => dispatch(NavigationActions.navigate({
    routeName: 'Movie Detail'
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(GridItems);
