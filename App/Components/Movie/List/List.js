import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { Images } from '../../../Themes';
import styles from './Styles/ListStyles';
import { handleList } from '../../../Transforms/ListConverter';
import DefaultItems from '../ListItem/Default';
import GridItems from '../ListItem/Grid';

class MovieList extends Component {
  _renderFooter() {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderItem = ({item}) => {
    const { itemsPerRow } = this.props;
    return itemsPerRow === 1 ? <DefaultItems movie={item}/> : <GridItems movie={item}/>;
  }

  _renderListItem() {
    const { movies, itemsPerRow, onEndReached } = this.props;
    return (
      <FlatList
        data={itemsPerRow === 1 ? movies : handleList(movies, itemsPerRow)}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index}
        ListFooterComponent={this._renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
      />
    );
  }

  _showData() {
    return (
      <Image
        source={Images.defaultBackground}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          {this._renderListItem()}
        </View>
      </Image>
    );
  }

  render() {
    return (
      <View>
        {this._showData()}
      </View>
    );
  }
}

MovieList.propTypes = {
  filterName: PropTypes.string,
  movies: PropTypes.array,
  onEndReached: PropTypes.func,
  itemsPerRow: PropTypes.number
};

const mapStateToProps = (state) => ({
  itemsPerRow: state.list.quantity
});

export default connect(mapStateToProps, undefined)(MovieList);
