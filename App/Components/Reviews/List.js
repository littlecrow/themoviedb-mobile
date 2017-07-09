import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator
} from 'react-native';
import { View as AnimatableView} from 'react-native-animatable';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './Styles/ListStyles';

class List extends Component {
  _renderItem ({item}) {
    return (
      <ListItem data={item}/>
    );
  }

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <AnimatableView animation="slideInUp" duration={300} style={styles.container}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </AnimatableView>
    );
  }
}

List.propTypes = {
  data: PropTypes.array,
};

export default List;
