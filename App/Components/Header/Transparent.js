import React from 'react';
import {
  View,
  TouchableNativeFeedback
} from 'react-native';
import Navbar from 'react-native-navbar';
import PropTypes from 'prop-types';
import styles, { backIconSize } from './Styles/TransparentStyles';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Themes/Colors';
import { reduceByCharacters } from '../../Transforms/TextConverter';

const MAX_TITLE_LENGTH = 40;

const renderHeaderLeft = (onPress) => (
  <View style={styles.componentContainer}>
    <TouchableNativeFeedback
      style={styles.componentContainer}
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(colors.secondary, true)}>
      <View style={styles.back}>
        <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
      </View>
    </TouchableNativeFeedback>
  </View>
);

const renderTitle = (title) => ({
  title: reduceByCharacters(title, MAX_TITLE_LENGTH),
  style: styles.title,
});

const TransparentHeader = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar
        containerStyle={styles.headerContainer}
        style={styles.header}
        leftButton={renderHeaderLeft(() => navigation.goBack())}
        title={renderTitle(title)}
      />
    </View>
  );
};

TransparentHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object
};

export default TransparentHeader;
