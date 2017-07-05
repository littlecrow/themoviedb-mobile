import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import { FormInput } from 'react-native-elements'
import { Colors } from '../../Themes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import NavigationBar from 'react-native-navbar';
import styles, { backIconSize } from './Styles/SearchBarStyles';

const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple(Colors.secondary, true) : null;

class SearchBar extends Component {
  _handleFocus() {

  }

  _renderHeaderLeft(onPress) {
    return (
      <TouchableWrapper
        onPress={onPress}
        background={TouchableBackGround}>
        <View style={[styles.componentContainer, styles.back]}>
          <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
        </View>
      </TouchableWrapper>
    );
  }

  _renderHeaderRight() {
    return (
      <View style={styles.headerRight}>
        <FormInput
          placeholder='Search...'
          placeholderTextColor={Colors.secondary}
          autoCorrect={false}
          selectionColor={Colors.secondary}
          underlineColorAndroid={Colors.secondary}
          style={styles.searchInput}
          autoFocus={true}
          onFocus={this._handleFocus()}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.header}
        >
          {this._renderHeaderLeft()}
          {this._renderHeaderRight()}
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
