import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView, //! applying a bottom padding when a key show-up is detected
  LayoutAnimation, //! show/hide animation
  Platform,
  UIManager,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Image, View } from 'react-native-animatable';

import { Images } from '../../Themes/';
import styles from './Styles/AuthScreen';

import Opening from './Opening';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

if(Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

class AuthScreen extends Component {
  state = {
    visibleForm: null, //? Can be: null | SIGNUP | LOGIN
  };

  _hideAuthScreen = async () => {
    //! Slide out the form container
    await this._setVisibleForm(null);
    //! Fade out the logo
    await this.logoImgRef.fadeOut(800);
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

  render() {
    const { visibleForm } = this.state;

    const _saveStorage = async (account) => {
      try {
        await AsyncStorage.setItem('username', account.username);
        await AsyncStorage.setItem('password', account.password);
      } catch (error) {
        console.log(error);
      }
    };

    const _getStorage = async () => {
      try {
        let storageUsername = '', storagePassword = '';
        storageUsername = await AsyncStorage.getItem('username');
        storagePassword = await AsyncStorage.getItem('password');

        return { storageUsername, storagePassword };
      } catch (error) {
        console.log(error);
      }
    };

    const handleSignUpSubmit = async (account) => {
      if(account.password !== account.confirmPassword){
        alert('Wrong username or password');
      }
      else{
        alert('Sign up successful, please login again!');
        await _saveStorage(account);
        this._setVisibleForm('LOGIN');
      }
    };

    const handleLoginSubmit = async (account) => {
      const { storageUsername, storagePassword } = await _getStorage();
      if(account.username === storageUsername && account.password === storagePassword){
        alert('Welcome back!');
        this.props.navigationToMovies();
      }
      else {
        alert('This user is not available');
      }
    };

    const _renderOpeningForm = () => {
      return(
        <Opening
          onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
          onSignInPress={() => this._setVisibleForm('LOGIN')}
        />
      );
    };

    const _renderSignUpForm = () => {
      return(
        <SignUpForm
          ref={(ref) => this.formRef = ref}
          onLoginLinkPress={() => this._setVisibleForm('LOGIN')}
          onSignupPress={handleSignUpSubmit}
          isEnabled={true}
          isLoading={true}
        />
      );
    };

    const _renderLoginForm = () => {
      return(
        <LoginForm
          ref={(ref) => this.formRef = ref}
          onSignUpLinkPress={() => this._setVisibleForm('SIGNUP')}
          onLoginPress={handleLoginSubmit}
          isEnabled={true}
          isLoading={true}
        />
      );
    };

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
        {(!visibleForm) &&
          _renderOpeningForm()
        }
        <KeyboardAvoidingView
          style={[formStyle, styles.bottom]}
          keyboardVerticalOffset={10}
          behavior={'padding'}
        >
          {(visibleForm === 'SIGNUP') && (
            _renderSignUpForm()
          )}

          {(visibleForm === 'LOGIN') && (
            _renderLoginForm()
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

AuthScreen.propTypes = {
  login: PropTypes.func,
  navigationBack: PropTypes.func,
  navigationToMovies: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigationBack: () => dispatch(NavigationActions.back()),
    navigationToMovies: () => dispatch(NavigationActions.navigate({
      routeName: 'Movies'
    }))
  };
};

export default connect(null, mapDispatchToProps)(AuthScreen);
