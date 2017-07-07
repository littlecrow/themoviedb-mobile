import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

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
  signUpButton: {
    backgroundColor: '#01d277'
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  signUpLink: {
    padding: 10,
    textAlign: 'center',
    color: 'black'
  }
});

export default styles;
