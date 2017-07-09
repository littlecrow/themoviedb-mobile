import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Navbar from 'react-native-navbar';
import styles from './Styles/HeaderStyles';
import { reduceByCharacters } from '../../Transforms/TextConverter';
import HeaderRight from '../Drawer/HeaderRight';
import DrawerButton from './Button';
import { NAVIGATION_KEY } from '../../Redux/Navigation';

const HEADER_TITLE_LENGTH = 30;

const renderLeftButton = (element = null) => (
  <View style={[styles.componentContainer, styles.headerLeft]}>
    {element ? element : <DrawerButton/>}
  </View>
);

const renderRightButton = (element = null) => (
  <View style={[styles.componentContainer, styles.headerRight]}>
    {element ? element : <HeaderRight/>}
  </View>
);

const renderTitle = (title) => ({
  title: reduceByCharacters(title, HEADER_TITLE_LENGTH),
  style: styles.title,
});

const ReduxHeader = ({ title, disableTitle, navigation, headerLeft, headerRight }) => {
  const { routes, index } = navigation;
  let _title = routes[index].routeName;
  if (disableTitle) {
    _title = title;
  }
  return (
    <View style={styles.container}>
      <Navbar
        style={styles.header}
        leftButton={renderLeftButton(headerLeft)}
        rightButton={renderRightButton(headerRight)}
        title={renderTitle(_title)}
      />
    </View>
  );
};

ReduxHeader.propTypes = {
  navigation: PropTypes.object,
  disableTitle: PropTypes.bool,
  title: PropTypes.string,
  headerRight: PropTypes.element,
  headerLeft: PropTypes.element,
};

const mapStateToProps = (state) => {
  return {
    navigation: state[NAVIGATION_KEY].navigation
  };
};

export default connect(mapStateToProps)(ReduxHeader);
