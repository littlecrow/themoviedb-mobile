import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native-animatable';
import styles from './Styles/SignUpForm';

import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  hideForm = async () => {
    if(this.buttonRef && this.formRef && this.linkRef){
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ]);
    }
  }

  render() {
    const { username, password, confirmPassword } = this.state;
    const { onLoginLinkPress, onSignupPress } = this.props;
    const isValid = username !== '' && password !== '' && confirmPassword !== '';

    return (
      <View style={styles.container}>
        <View
          style={styles.form}
          ref={(ref) => { this.formRef = ref; }}
        >
          {/* input username */}
          <CustomTextInput
            ref={(ref) => this.usernameInputRef = ref}
            name={'username'}
            placeholder={'Username'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ username: value })}
          />
          {/* input username */}
          <CustomTextInput
            ref={(ref) => this.passwordInputRef = ref}
            name={'password'}
            placeholder={'Password'}
            secureTextEntry={true}
            returnKeyType={'done'}
            onChangeText={(value) => this.setState({ password: value })}
          />
          <CustomTextInput
            ref={(ref) => this.passwordInputRef = ref}
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            returnKeyType={'done'}
            onChangeText={(value) => this.setState({ confirmPassword: value })}
          />
        </View>

        {/* button login */}
        <View style={styles.footer}>
          <View
            ref={(ref) => this.buttonRef = ref}
            animation={'bounceIn'}
            duration={600}
            delay={400}
          >
            <CustomButton
              text={'SIGN UP'}
              buttonStyle={styles.signUpButton}
              textStyle={styles.signUpButtonText}
              isEnabled={isValid}
              onPress={() => onSignupPress(username, password)}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signUpLink}
            animation={'fadeIn'}
            duration={600}
            delay={400}
            onPress={onLoginLinkPress}
          >Already have account?</Text>
        </View>
      </View>
    );
  }
}

SignUpForm.propTypes = {
  onLoginLinkPress: PropTypes.func,
  onSignupPress: PropTypes.func
};

export default SignUpForm;
