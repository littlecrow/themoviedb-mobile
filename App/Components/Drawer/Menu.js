import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActionCreators } from '../../Redux/Navigation';
import styles from './Styles/MenuStyles';
import { Images } from '../../Themes';
import { NAVIGATION_KEY } from '../../Redux/Navigation';
import MenuItem from './MenuItem';
import { ROUTES } from '../../Redux/Navigation/NavigationRoutes';

const Menu = ({navigateToDiscoverScreen, navigation}) => {
  const { routeName } = navigation.routes[navigation.index];
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
          onPress={() => navigateToDiscoverScreen()}
          name="Discover"
          icon={Images.discoverIcon}
          active={routeName === ROUTES.DiscoverScreen}
        />
        <MenuItem
          /*onPress={() => navigateToDiscoverScreen()}*/
          name="Movies"
          icon={Images.moviesIcon}
          active={false}
        />
        <MenuItem
          /*onPress={() => navigateToDiscoverScreen()}*/
          name="Tv Shown"
          icon={Images.tvIcon}
          active={false}
        />
        <MenuItem
          /*onPress={() => navigateToDiscoverScreen()}*/
          name="People"
          icon={Images.peopleIcon}
          active={false}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  navigation: state[NAVIGATION_KEY]
});

const mapDispatchToProps = (dispatch) => ({
  navigateToDiscoverScreen: () => dispatch(NavigationActionCreators.navigateToDiscoverScreen())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
