import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';
import styles from './Styles/MenuStyles';
import PropTypes from 'prop-types';
import colors from '../../Themes/Colors';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

const isAndroid = Platform.OS === 'android';

const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

const MenuItem = ({name, icon, active, to}) => {
  if (active) {
    return (
      <View
        style={[styles.item, styles.activeItem]}>
        <Icon containerStyle={styles.icon} {...icon}/>
        <Text style={styles.activeItemLabel}>{name}</Text>
      </View>
    );
  }
  const background = isAndroid ? TouchableNativeFeedback.Ripple(colors.peterRiver, true) : null;
  return (
    <Link
      to={to}
      component={TouchableWrapper}
      useForeground={true}
      background={background}>
      <View style={[styles.item]}>
        <Icon containerStyle={styles.icon} {...icon}/>
        <Text>{name}</Text>
      </View>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object,
  active: PropTypes.bool,
  to: PropTypes.string
};

export default MenuItem;
