import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native-animatable';
import styles from './Styles/LoginForm';

// import styles from './Styles/Opening';
import LargeButton from '../../Components/LargeButton';
import LargeTextInput from '../../Components/LargeTextInput';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
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
    const { username, password } = this.state;
    const { onSignUpLinkPress, onLoginPress } = this.props;
    const isValid = username !== '' && password !== '';

    return (
      <View style={styles.container}>
        <View
          style={styles.form}
          ref={(ref) => { this.formRef = ref; }}
        >
          <LargeTextInput
            ref={(ref) => this.usernameInputRef = ref}
            name={'username'}
            placeholder={'Username'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ username: value })}
          />
          <LargeTextInput
            ref={(ref) => this.passwordInputRef = ref}
            name={'password'}
            placeholder={'Password'}
            secureTextEntry={true}
            returnKeyType={'done'}
            onChangeText={(value) => this.setState({ password: value })}
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
            <LargeButton
              text={'LOGIN'}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              isEnabled={isValid}
              onPress={() => onLoginPress(this.state)}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signUpLink}
            animation={'fadeIn'}
            duration={600}
            delay={400}
            onPress={onSignUpLinkPress}
          >Not register yet?</Text>
        </View>
      </View>
    );
  }
}

LoginForm.propTypes = {
  onSignUpLinkPress: PropTypes.func,
  onLoginPress: PropTypes.func
};

export default LoginForm;
