import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-animatable';

export default class LargeTextInput extends Component {
  static propTypes = {
    isEnabled: PropTypes.bool
  }

  state = {
    isFocused: false
  }

  focus = () => this.textInputRef.focus()

  render () {
    const { isEnabled, ...otherProps } = this.props;
    const { isFocused } = this.state;
    // const color = isEnabled ? 'red' : 'black';
    // const borderColor = isFocused ? 'rgb(1,210,119)' : 'rgb(0,90,51)';
    return (
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput
            ref={(ref) => this.textInputRef = ref}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.textInput}
            maxLength={32}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={'black'}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            {...otherProps}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 1
  },
  textInputWrapper: {
    height: 42,
    marginBottom: 1,
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    color: 'black',
    height: 42,
    padding: 7
  }
});
