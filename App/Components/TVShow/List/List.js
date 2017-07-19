import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';
import styles from './Styles/ListStyles';
import { handleList } from '../../../Transforms/ListConverter';
import DefaultItems from '../ListItem/Default';
import GridItems from '../ListItem/Grid';

class TVShowList extends Component {
  _renderFooter() {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderItem = ({item}) => {
    const { itemsPerRow } = this.props;
    return itemsPerRow === 1 ? <DefaultItems tvShow={item}/> : <GridItems tvShow={item}/>;
  }

  _renderList() {
    const { data, itemsPerRow, onEndReached } = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={itemsPerRow === 1 ? data : handleList(data, itemsPerRow)}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
          ListFooterComponent={this._renderFooter}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderList()}
      </View>
    );
  }
}

TVShowList.propTypes = {
  data: PropTypes.array,
  onEndReached: PropTypes.func,
  itemsPerRow: PropTypes.number
};

const mapStateToProps = (state) => ({
  itemsPerRow: state.list.quantity
});

export default connect(mapStateToProps, undefined)(TVShowList);
