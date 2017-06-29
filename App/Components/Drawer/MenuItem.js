import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Image, Text } from 'react-native';
import styles from './Styles/MenuStyles';
import PropTypes from 'prop-types';
import colors from '../../Themes/Colors';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

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
  const background = isAndroid ? TouchableNativeFeedback.Ripple(colors.primary, true) : null;
  return (
    <TouchableWrapper
      onPress={onPress}
      useForeground={true}
      background={background}>
      <View style={[styles.item]}>
        <Image style={styles.icon} source={ icon } />
        <Text>{name}</Text>
      </View>
    </TouchableWrapper>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any,
  active: PropTypes.bool,
  onPress: PropTypes.func
};

export default MenuItem;
