import React from 'react';
import {
  View,
  TouchableNativeFeedback
} from 'react-native';
import Navbar from 'react-native-navbar';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles, { backIconSize } from './Styles/TransparentStyles';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Themes/Colors';
import { reduceByCharacters } from '../../Transforms/TextConverter';

const MAX_TITLE_LENGTH = 40;

const renderHeaderLeft = (onPress) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple(colors.secondary, true)}>
    <View style={[styles.componentContainer, styles.back]}>
      <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
    </View>
  </TouchableNativeFeedback>
);

const renderTitle = (title) => ({
  title: reduceByCharacters(title, MAX_TITLE_LENGTH),
  style: styles.title,
});

const TransparentHeader = ({title, history, onBackPress}) => {
  const handleBackPress = () => {
    onBackPress();
    history.goBack();
  };

  return (
    <View style={styles.container}>
      <Navbar
        containerStyle={styles.headerContainer}
        style={styles.header}
        leftButton={renderHeaderLeft(handleBackPress)}
        title={renderTitle(title)}
      />
    </View>
  );
};

TransparentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.shape({goBack: PropTypes.func.isRequired}).isRequired,
  onBackPress: PropTypes.func
};

export default withRouter(TransparentHeader);
