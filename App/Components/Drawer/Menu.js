import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Styles/Menu';
import { Images } from '../../Themes';

import { connect } from 'react-redux';
import { NavigationActionCreators } from '../../Redux/Navigation';

const Menu = ({navigateToMoviesScreen}) => {
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
      <View style={styles.sideMenuListMenu}>
        <TouchableOpacity style={styles.groupLabel}>
          <Image style={styles.icon} source={ Images.discoverIcon } />
          <Text>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.groupLabel}
          onPress={() => navigateToMoviesScreen()}
          // autoClosing={true}
          isOpen={false}
        >
          <Image style={styles.icon} source={ Images.moviesIcon } />
          <Text>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.groupLabel}>
          <Image style={styles.icon} source={ Images.tvIcon } />
          <Text>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.groupLabel}>
          <Image style={styles.icon} source={ Images.peopleIcon } />
          <Text>People</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navigateToMoviesScreen: () => dispatch(NavigationActionCreators.navigateToMoviesScreen())
});

export default connect(undefined, mapDispatchToProps)(Menu);
