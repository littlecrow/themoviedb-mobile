import React from 'react';
import { View } from 'react-native';
import styles from './Styles/HeaderRightStyles';
import ListType from './ListType';
import SearchBar from './SearchBar';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <ListType/>
    </View>
  );
};

export default HeaderRight;
