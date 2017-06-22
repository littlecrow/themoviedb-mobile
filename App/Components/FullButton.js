import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Styles/FullButtonStyles';
import PropTypes from 'prop-types';

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    children: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  getText () {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  getIcon () {
    const buttonIcon = this.props.icon || null;
    if (buttonIcon) {
      return <View style={styles.icon}>{buttonIcon}</View>;
    }
    return null;
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <View style={styles.container}>
          {this.getIcon()}
          <Text style={styles.buttonText}>{this.getText()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
