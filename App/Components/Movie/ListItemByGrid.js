import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import { NavigationActionCreators } from '../../Redux/Navigation';
import styles from './Styles/ListItemByGridStyles';

class ListItemByGrid extends Component {
  _renderItem = () => {
    const { movie, navigateToDetail } = this.props;
    return movie.data.map((item, index) => (
      <TouchableHighlight
        onPress={() => navigateToDetail(item)}
        key={index}
        style={[styles.itemContainer]}>
        <View>
          <View>
            <View style={styles.loadingContainer}>
              <FitImage
                indicator
                indicatorColor="white"
                indicatorSize="small"
                source={{uri: THEMOVIEDB_IMAGE_SRC + item.backdrop_path}}
                resizeMode='cover'
                style={styles.image}
              />
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
