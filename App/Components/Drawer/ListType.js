import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Modal, View, Text } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import styles from './Styles/ListTypeStyles';
import { connect } from 'react-redux';
import { ListActionCreators } from '../../Redux/List';

const nums = [1, 2, 3, 4];

class ListType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this._setModalVisible = this._setModalVisible.bind(this);
  }

  _setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  _renderModalHeader() {
    return (
      <View style={styles.modalHeader}>
        <Text style={styles.title}>Items per row</Text>
        <TouchableOpacity
          onPress={() => {
            this._setModalVisible(false);
          }}
        >
          <EvilIcons name='close' size={22} color='black'/>
        </TouchableOpacity>
      </View>
    );
  }

  _renderModalBody() {
    const { setItemsPerRow } = this.props;
    return (
      <View style={styles.modalBody}>
        {nums.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.modalBodyContent}
            onPress={() => {
              setItemsPerRow(item);
              this._setModalVisible(false);
            }}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  _renderOptionIcon() {
    return (
      <TouchableOpacity onPress={() => {this._setModalVisible(true);}}>
        <Entypo
          name='dots-three-vertical'
          size={22}
          color='white'
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert('Modal has been closed');}}
        >
          <TouchableOpacity
            onPress={() => {this._setModalVisible(false);}}
            style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalDialog}>
                {this._renderModalHeader()}
                {this._renderModalBody()}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        {this._renderOptionIcon()}
      </View>
    );
  }
}

ListType.propTypes = {
  setItemsPerRow: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setItemsPerRow: (quantity) => dispatch(ListActionCreators.setItemsPerRow(quantity))
});

export default connect(undefined, mapDispatchToProps)(ListType);
