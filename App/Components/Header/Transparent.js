import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import Navbar from 'react-native-navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import styles, { backIconSize } from './Styles/TransparentStyles';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Themes/Colors';
import { reduceByCharacters } from '../../Transforms/TextConverter';

const MAX_TITLE_LENGTH = 35;

const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple(colors.secondary, true) : null;

const renderHeaderLeft = (onPress) => (
  <TouchableWrapper
    onPress={onPress}
    background={TouchableBackGround}>
    <View style={[styles.componentContainer, styles.back]}>
      <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
    </View>
  </TouchableWrapper>
);

const renderTitle = (title) => ({
  title: reduceByCharacters(title, MAX_TITLE_LENGTH),
  style: styles.title,
});

const renderStatusBar = () => ({
  hidden: !isAndroid
});

const TransparentHeader = ({style, title, navigateBack, onBackPress}) => {
  const handleBackPress = () => {
    navigateBack();
    onBackPress();
  };

  return (
    <View style={[style, styles.container]}>
      <Navbar
        statusBar={renderStatusBar()}
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
  onBackPress: PropTypes.func,
  navigateBack: PropTypes.func,
  style: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigateBack: () => dispatch(NavigationActions.back())
  };
};

export default connect(null, mapDispatchToProps)(TransparentHeader)
