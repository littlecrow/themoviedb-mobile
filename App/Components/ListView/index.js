import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from './Styles/ListViewStyles';
import { handleList } from '../../Transforms/ListConverter';
import BackdropView from './BackdropView';
import MultipleBackdropView from './MultipleBackdropView';
import PeopleView from './PeopleView';
import { ListConstant } from '../../Redux/List';

class List extends Component {
  _renderFooter() {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderItem = ({item, index}) => {
    const { itemsPerRow, type } = this.props;
    if(type === ListConstant.PEOPLE)
      return <PeopleView data={item} index={index}/>;
    else
      return itemsPerRow === 1 ? <BackdropView type={type} data={item} index={index}/> : <MultipleBackdropView type={type} data={item} index={index}/>;
  }

  _passData(type, data, itemsPerRow) {
    if(type === ListConstant.PEOPLE)
      return data;
    else
      return itemsPerRow === 1 ? data : handleList(data, itemsPerRow);
  }

  _renderList() {
    const { data, type, itemsPerRow, onEndReached } = this.props;
    return (
      <View>
        <FlatList
          data={this._passData(type, data, itemsPerRow)}
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
