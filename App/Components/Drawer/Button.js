import React, { Component } from 'react';
import TouchableView from '../TouchableView';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native-animatable';
import styles, { buttonColor } from './Styles/ButtonStyles';
import { NavigationActionCreators } from '../../Redux/Navigation';

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
      <TouchableView onPress={this._toggleDrawerFallback} rippleColor={buttonColor}>
        <View ref={(v) => this.view = v} style={styles.container}>
          <FontAwesome size={24} name="bars" color={buttonColor}/>
        </View>
      </TouchableView>
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
