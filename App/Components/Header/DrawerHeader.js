import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Navbar from 'react-native-navbar';
import styles from './Styles/ReduxHeaderStyles';
import DrawerButton from '../Drawer/Button';
import { reduceByCharacters } from '../../Transforms/TextConverter';
import { NAVIGATION_KEY } from '../../Redux/Navigation';

const HEADER_TITLE_LENGTH = 30;

const renderLeftButton = (element = null) => (
  <View style={styles.componentContainer}>
    {element ? element : <DrawerButton/>}
  </View>
);

const renderRightButton = (element = null) => (
  <View style={styles.componentContainer}>
    {element}
  </View>
);

const renderTitle = (title) => ({
  title: reduceByCharacters(title, HEADER_TITLE_LENGTH),
  style: styles.title,
});

const ReduxHeader = ({ drawer, disableRedux, title, headerLeft, headerRight }) => {

  let _title = '';
  if (!disableRedux) {
    const { routes, index } = drawer.routes[0];
    _title = routes[index].routeName;
  }
  else {
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
  drawer: PropTypes.object,
  disableRedux: PropTypes.bool,
  title: PropTypes.string,
  headerRight: PropTypes.element,
  headerLeft: PropTypes.element,
};

const mapStateToProps = (state) => {
  return {
    drawer: state[NAVIGATION_KEY].drawer
  };
};

export default connect(mapStateToProps)(ReduxHeader);
