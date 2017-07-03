import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Navbar from 'react-native-navbar';
import styles from './Styles/HeaderStyles';
import { reduceByCharacters } from '../../Transforms/TextConverter';
import HeaderRight from '../Drawer/HeaderRight';
import DrawerButton from './Button';

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

const ReduxHeader = ({ headerLeft, headerRight }) => {
  return (
    <View style={styles.container}>
      <Navbar
        style={styles.header}
        leftButton={renderLeftButton(headerLeft)}
        rightButton={renderRightButton(headerRight)}
        title={renderTitle('Discover')}
      />
    </View>
  );
};

ReduxHeader.propTypes = {
  drawer: PropTypes.object,
  disableRedux: PropTypes.bool,
  title: PropTypes.string,
  headerRight: PropTypes.element,
  headerLeft: PropTypes.element,
};

export default ReduxHeader;
