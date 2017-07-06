import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView, //! applying a bottom padding when a key show-up is detected
  LayoutAnimation, //! show/hide animation
  Platform,
  UIManager,
  AsyncStorage
} from 'react-native';
import { Image, View } from 'react-native-animatable';

import { Images } from '../../Themes/';
import styles from './Styles/AuthScreen';

import Opening from './Opening';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

if(Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleForm: null, //? Can be: null | SIGNUP | LOGIN
    };
  }

  _hideAuthScreen = async () => {
    //! Slide out the form container
    await this._setVisibleForm(null);

    //! Fade out the logo
    await this.logoImgRef.fadeOut(800);

    //! Tell the container that the animation has completed
  }

  _setVisibleForm = async (visibleForm) => {
    //! 1. Hide the current form
    if(this.state.visibleForm && this.formRef && this.formRef.hideForm){
      await this.formRef.hideForm();
    }
    //! 2. Configuration animation for the next step
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    //! 3. Set the new visible form
    this.setState({visibleForm});
  }

  async handleLoginSubmit(account){
    let storageUsername = '', storagePassword = '';
    try {
      storageUsername = await AsyncStorage.getItem('username');
      storagePassword = await AsyncStorage.getItem('password');
    } catch (error) {
      console.log(error);
    }
    if(account.username === storageUsername && account.password === storagePassword){
      alert("it's ok");
    }
    else {
      alert('This user is not available');
      console.log(`${storageUsername} ${storagePassword}`);
    }
  }

  async handleSignUpSubmit(account){
    if(account.password !== account.confirmPassword){
      alert('Wrong username or password');
    }
    else{
      try {
        await AsyncStorage.setItem('username', account.username);
        await AsyncStorage.setItem('password', account.password);
        alert('Sign up successful!');
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { visibleForm } = this.state;

    //! The following style is responsible of the "bounce-up from bottom" animation of the form
    const formStyle = (!visibleForm) ? { height: 0 } : { marginTop: 40 };
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={Images.logoImg}
        />
        {(!visibleForm) && (
          <Opening
            onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
            onSignInPress={() => this._setVisibleForm('LOGIN')}
          />
        )}
        <KeyboardAvoidingView
          style={[formStyle, styles.bottom]}
          keyboardVerticalOffset={10}
          behavior={'padding'}
        >
          {(visibleForm === 'SIGNUP') && (
            <SignUpForm
              ref={(ref) => this.formRef = ref}
              onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
              onSignupPress={this.handleSignUpSubmit}
              isEnabled={true}
              isLoading={true}
            />
          )}

          {(visibleForm === 'LOGIN') && (
            <LoginForm
              ref={(ref) => this.formRef = ref}
              onSignUpLinkPress={() => this._setVisibleForm('SIGNUP')}
              onLoginPress={this.handleLoginSubmit}
              isEnabled={true}
              isLoading={true}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

AuthScreen.propTypes = {
  login: PropTypes.func
};


export default AuthScreen;
