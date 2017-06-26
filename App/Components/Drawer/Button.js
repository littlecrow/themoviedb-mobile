import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles, { buttonColor } from './Styles/ButtonStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

const DrawerButton = ({ appOpenDrawer }) => {
  return (
    <TouchableOpacity onPress={appOpenDrawer}>
      <View style={styles.container}>
        <FontAwesome size={24} name="bars" color={buttonColor}/>
      </View>
    </TouchableOpacity>
  );
};

DrawerButton.propTypes = {
  appOpenDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  appOpenDrawer: () => dispatch(NavigationActionCreators.appOpenDrawer()),
  // closeDrawer: () => dispatch(NavigationActionCreators.closeDrawer())
});
export default connect(null, mapDispatchToProps)(DrawerButton);
