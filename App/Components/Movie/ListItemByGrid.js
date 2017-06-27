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

class ListItemByGrid extends Component {
  _renderItem = () => {
    const { movie, navigateToDetail } = this.props;
    return movie.data.map((childItem, index) => (
      <TouchableOpacity
        onPress={() => navigateToDetail(childItem)}
        key={index}
        style={styles.itemContainer}>
        <View>
          <View>
            <FitImage
              source={{uri: THEMOVIEDB_IMAGE_SRC + childItem.backdrop_path}}
              resizeMode='contain'
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>{childItem.title}</Text>
            <Text style={styles.text}>{childItem.release_date}</Text>
            <Text style={styles.text}>Rating: {childItem.vote_average}/10</Text>
          </View>
        </View>
      </TouchableOpacity>
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

export default connect(mapDispatchToProps)(ListItemByGrid);
