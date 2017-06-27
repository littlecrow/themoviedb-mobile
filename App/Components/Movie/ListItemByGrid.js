import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import styles from './Styles/ListItemByGridStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

// Rename thanh Grid Item di baby
class ListItemByGrid extends Component {
  _renderItem = () => {
    const { movie, navigateToDetail } = this.props;
    return movie.data.map((item, index) => (
      <TouchableHighlight
        onPress={() => navigateToDetail(item)}
        key={index}
        style={[styles.itemContainer, index === 0 ? styles.firstItem : styles.lastItem]}>
        <View>
          <View>
            <FitImage
              source={{uri: THEMOVIEDB_IMAGE_SRC + item.backdrop_path}}
              resizeMode='contain'
            />
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
