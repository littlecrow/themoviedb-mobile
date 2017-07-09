import React from 'react';
import { View } from 'react-native';
import styles from './Styles/HeaderRightStyles';
import ListType from './ListType';
import SearchIcon from './SearchIcon';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <SearchIcon/>
      <ListType/>
    </View>
  );
};

export default HeaderRight;
