import React from 'react';
import { View, Text } from 'react-native';
import TouchableView from '../TouchableView';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import styles from './Styles/MenuStyles';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import colors from '../../Themes/Colors';

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
  return (
    <TouchableView
      onPress={() => navigate(name)}
      useForeground={true}
      rippleColor={colors.peterRiver}>
      <View style={[styles.item]}>
        <Icon containerStyle={styles.icon} {...icon}/>
        <Text>{name}</Text>
      </View>
    </TouchableView>
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
