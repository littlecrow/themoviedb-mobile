import React from 'react';
import { View } from 'react-native';
import styles from './Styles/HeaderRightStyles';
import ListType from './ListType';
import SearchIcon from './SearchIcon';

const HeaderRight = ({ disableListTypes }) => {
  return (
    <View style={styles.container}>
      <SearchIcon/>
      { disableListTypes ? null : <ListType/>}
    </View>
  );
};

export default HeaderRight;
