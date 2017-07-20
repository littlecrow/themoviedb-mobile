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
import DefaultItems from './Default';
import GridItems from './Grid';

class List extends Component {
  _renderFooter() {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderItem = ({item}) => {
    const { itemsPerRow, type } = this.props;
    return itemsPerRow === 1 ? <DefaultItems type={type} data={item}/> : <GridItems type={type} data={item}/>;
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

List.propTypes = {
  filterName: PropTypes.string,
  data: PropTypes.array,
  type: PropTypes.string,
  onEndReached: PropTypes.func,
  itemsPerRow: PropTypes.number
};

const mapStateToProps = (state) => ({
  itemsPerRow: state.list.quantity
});

export default connect(mapStateToProps, undefined)(List);
