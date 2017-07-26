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
    if(itemsPerRow === 1) {
      if(type === ListConstant.PEOPLE)
        return <PeopleView data={item} index={index}/>;
      else
        return <BackdropView type={type} data={item} index={index}/>;
    } else {
      return <MultipleBackdropView type={type} data={item} index={index}/>;
    }
  }

  _renderList() {
    const { data, itemsPerRow, onEndReached } = this.props;
    return (
      <View>
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
