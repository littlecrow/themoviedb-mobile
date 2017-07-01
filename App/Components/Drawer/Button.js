import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles, { buttonColor } from './Styles/ButtonStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

const DrawerButton = ({ toggleDrawer }) => {
  return (
    <TouchableOpacity onPress={() => toggleDrawer()}>
      <View style={styles.container}>
        <FontAwesome size={24} name="bars" color={buttonColor}/>
      </View>
    </TouchableOpacity>
  );
};

DrawerButton.propTypes = {
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(NavigationActionCreators.toggleDrawer()),
});
export default connect(undefined, mapDispatchToProps)(DrawerButton);
