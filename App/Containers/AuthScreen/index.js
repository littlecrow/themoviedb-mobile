import React, { Component } from 'react';
import {
  KeyboardAvoidingView, //! applying a bottom padding when a key show-up is detected
  LayoutAnimation, //! show/hide animation
  Platform,
  UIManager
} from 'react-native';
import { Image, View } from 'react-native-animatable';

import { Images } from '../../Themes/';
import styles from './Styles/AuthScreen';

import Opening from './Opening';

if(Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          // ref
          style={styles.logoImg}
          source={Images.logoImg}
        />
        <Opening />
      </View>
    );
  }
}

export default AuthScreen;
