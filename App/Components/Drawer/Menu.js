import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Styles/Menu';
import { Images } from '../../Themes';

class Menu extends Component {
  render() {
    return (
      <View style={styles.headerPadding}>
        <View style={styles.sideMenuHeader}>
          <Image
            source={Images.avatarDefault}
            style={styles.roundAvatar}
          />
          <View style={styles.sideMenuHeaderInfoUser}>
            <Text>Mar J</Text>
            <Text>baokhanh7m@gmail.com</Text>
          </View>
        </View>
        <View style={styles.sideMenuListMenu}>
          <TouchableOpacity style={styles.groupLabel}>
            <Image style={styles.icon} source={ Images.discoverIcon } />
            <Text>Discover</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.groupLabel}>
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
  }
}

export default Menu;
