import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActionCreators } from '../../Redux/Navigation';
import styles from './Styles/MenuStyles';
import { Images } from '../../Themes';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import MenuItem from './MenuItem';
import { ROUTES } from '../../Navigation/NavigationRoutes';

const Menu = ({appNavigateToDiscover, navigation}) => {
  // const { routes, index } = navigation.routes[0];
  // const { routeName } = routes[index];
  const routeName = "Hello";
  return (
    <View style={styles.headerPadding}>
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
        <MenuItem
          onPress={() => appNavigateToDiscover()}
          name="Discover"
          icon={Images.discoverIcon}
          active={routeName === ROUTES.DiscoverScreen}
        />
        <MenuItem
          /*onPress={() => appNavigateToDiscover()}*/
          name="Movies"
          icon={Images.moviesIcon}
          active={false}
        />
        <MenuItem
          /*onPress={() => appNavigateToDiscover()}*/
          name="Tv Shown"
          icon={Images.tvIcon}
          active={false}
        />
        <MenuItem
          /*onPress={() => appNavigateToDiscover()}*/
          name="People"
          icon={Images.peopleIcon}
          active={false}
        />
      </View>
    </View>
  );
};

Menu.propTypes = {
  appNavigateToDiscover: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = state => ({
  navigation: state[NAVIGATION_KEY].navigation,
});

const mapDispatchToProps = (dispatch) => ({
  appNavigateToDiscover: () => dispatch(NavigationActionCreators.appNavigateToDiscover())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
