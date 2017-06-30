import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActionCreators } from '../../Redux/Navigation';
import styles from './Styles/MenuStyles';
import { Images } from '../../Themes';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import MenuItem from './MenuItem';

const renderMenuList = (list, navigate, currentRouteName) => (
  list.map(({ routeName }, index) => (
    <MenuItem
      onPress={() => navigate(routeName)}
      key={index}
      name={routeName}
      icon={Images.discoverIcon}
      active={routeName === currentRouteName}
    />
  ))
);

const Menu = ({ drawer, navigate }) => {
  const drawerRoutes = drawer.routes[0].routes;
  const { routes, index } = drawer.routes[0];
  const currentRouteName = routes[index].routeName;
  return (
    <View>
      <View style={styles.sideMenuHeader}>
        <Image
          source={Images.avatarDefault}
          style={styles.roundAvatar}
        />
        <View style={styles.sideMenuHeaderInfoUser}>
          <Text style={styles.textHeaderInfoUser}>Mar J</Text>
          <Text style={styles.textHeaderInfoUser}>baokhanh7m@gmail.com</Text>
        </View>
      </View>
      <View style={styles.listMenu}>
        {renderMenuList(drawerRoutes, navigate, currentRouteName)}
      </View>
    </View>
  );
};

Menu.propTypes = {
  drawer: PropTypes.object,
  navigate: PropTypes.func,
};

const mapStateToProps = state => ({
  drawer: state[NAVIGATION_KEY].drawer,
});

const mapDispatchToProps = (dispatch) => ({
  navigate: (routeName) => dispatch(NavigationActionCreators.navigateInDrawer(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
