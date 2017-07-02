import React, { Component } from 'react';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native-animatable';
import styles, { buttonColor } from './Styles/ButtonStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';
const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple(buttonColor, true) : null;
class DrawerButton extends Component {

  constructor(props) {
    super(props);

    this._toggleDrawerFallback = this._toggleDrawerFallback.bind(this);
  }

  _toggleDrawerFallback = () => {
    this.view.rotate(300);
    return this.props.toggleDrawer();
  };

  render () {
    return (
      <TouchableWrapper onPress={this._toggleDrawerFallback} background={TouchableBackGround}>
        <View ref={(v) => this.view = v} style={styles.container}>
          <FontAwesome size={24} name="bars" color={buttonColor}/>
        </View>
      </TouchableWrapper>
    );
  }
}

DrawerButton.propTypes = {
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(NavigationActionCreators.toggleDrawer()),
});
export default connect(undefined, mapDispatchToProps)(DrawerButton);
