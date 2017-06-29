import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './Styles/MenuStyles';
import PropTypes from 'prop-types';

const MenuItem = ({name, icon, active, onPress}) => {
  if (active) {
    return (
      <View
        style={[styles.item, styles.activeItem]}>
        <Image style={styles.icon} source={ icon } />
        <Text style={styles.activeItemLabel}>{name}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={onPress}>
      <Image style={styles.icon} source={ icon } />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any,
  active: PropTypes.bool,
  onPress: PropTypes.func
};

export default MenuItem;
