import React, { Component } from 'react';
import { Text, View } from 'react-native-animatable';
import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes';

// import styles from './Styles/Opening';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';

class LoginForm extends Component {
  state = {
    email: '',
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
    const { email, password } = this.state;
    const isValid = email !== '' && password !== '';

    return (
      <View style={styles.container}>
        <View
          style={styles.form}
          ref={(ref) => { this.formRef = ref }}
        >
          {/* input email */}
          <CustomTextInput
            ref={(ref) => this.emailInputRef = ref}
            name={'email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ email: value })}
          />
          {/* input email */}
          <CustomTextInput
            ref={(ref) => this.passwordInputRef = ref}
            name={'email'}
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
            <CustomButton
              text={'LOGIN'}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signUpLink}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >Not register yet?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.screenWidth * 0.1
  },
  form: {
    marginTop: 20,
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: '#01d277'
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  signUpLink: {
    padding: 10,
    textAlign: 'center',
    color: 'black'
  }
});

export default LoginForm;
