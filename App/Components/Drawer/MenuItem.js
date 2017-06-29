import React from 'react';
import { View, TouchableNativeFeedback, Image, Text } from 'react-native';
import styles from './Styles/MenuStyles';
import PropTypes from 'prop-types';
import colors from '../../Themes/Colors';

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
    <TouchableNativeFeedback
      onPress={onPress}
      useForeground={true}
      background={TouchableNativeFeedback.Ripple(colors.primary, true)}>
      <View style={[styles.item]}>
        <Image style={styles.icon} source={ icon } />
        <Text>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any,
  active: PropTypes.bool,
  onPress: PropTypes.func
};

export default MenuItem;
