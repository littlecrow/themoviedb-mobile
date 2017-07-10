import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import styles from './Styles/MenuStyles';
import PropTypes from 'prop-types';
import colors from '../../Themes/Colors';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

const isAndroid = Platform.OS === 'android';

const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

const MenuItem = ({name, icon, isActive, navigate}) => {
  if (isActive) {
    return (
      <View
        style={[styles.item, styles.activeItem]}>
        <Icon containerStyle={styles.icon} {...icon} color={colors.secondary}/>
        <Text style={styles.activeItemLabel}>{name}</Text>
      </View>
    );
  }
  const background = isAndroid ? TouchableNativeFeedback.Ripple(colors.peterRiver, true) : null;
  return (
    <TouchableWrapper
      onPress={() => navigate(name)}
      useForeground={true}
      background={background}>
      <View style={[styles.item]}>
        <Icon containerStyle={styles.icon} {...icon}/>
        <Text>{name}</Text>
      </View>
    </TouchableWrapper>
  );
};

MenuItem.propTypes = {
  navigate: PropTypes.func,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object,
  isActive: PropTypes.bool,
};

const mapStateToProps = (state, { name }) => {
  const { index, routes } = state[NAVIGATION_KEY].navigation;
  const { routeName } = routes[index];
  return {
    isActive: routeName === name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (routeName) => dispatch(NavigationActions.navigate({routeName}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
