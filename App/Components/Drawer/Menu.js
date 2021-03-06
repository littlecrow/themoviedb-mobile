import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles/MenuStyles';
import { Images } from '../../Themes';
import MenuItem from './MenuItem';
import { DrawerRoutes } from '../../Navigation/NavigationRoutes';

const renderMenuList = (list) => (
  list.map(({ ...rest, bottom }, index) => bottom ? null : (
    <MenuItem key={index} {...rest}/>
  ))
);

const renderMenuListBottom = (list) => (
  list.map(({ ...rest, bottom }, index) => bottom ? (
    <MenuItem key={index} {...rest}/>
  ) : null)
);

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideMenuHeader}>
        <Image
          source={Images.avatarDefault}
          style={styles.roundAvatar}
        />
        <View style={styles.sideMenuHeaderInfoUser}>
          <Text style={styles.textHeaderInfoUser}>John Cena</Text>
          <Text style={styles.textHeaderInfoUser}>ucantseeme@gmail.com</Text>
        </View>
      </View>
      <View style={styles.listMenu}>
        {renderMenuList(DrawerRoutes)}
      </View>
      <View style={styles.listMenuBottom}>
        {renderMenuListBottom(DrawerRoutes)}
      </View>
    </View>
  );
};

export default Menu;
