import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Wrapper from '../../Components/Drawer/Wrapper';
import Header from '../../Components/Drawer/Header';
import LanguagePicker from './LanguagePicker';
import styles from './Styles/SettingScreenStyles';

const SettingScreen = () => (
  <Wrapper>
    <Header headerRight={<View/>}/>
    <View style={styles.container}>
      <View style={styles.item}>
        <LanguagePicker/>
      </View>
    </View>
  </Wrapper>
);

SettingScreen.propTypes = {

};

export default SettingScreen;
