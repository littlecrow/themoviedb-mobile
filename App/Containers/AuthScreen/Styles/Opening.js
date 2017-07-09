import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Metrics.screenWidth * 0.1,
    justifyContent: 'center'
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#9B9FA4'
  },
  separatorOr: {
    color: '#9B9FA4',
    marginHorizontal: 8
  },
  createAccountButton: {
    backgroundColor: '#9B9FA4'
  },
  createAccountButtonText: {
    color: 'white'
  },
  signInButton: {
    backgroundColor: '#01d277'
  },
  signInButtonText: {
    color: 'white'
  }
});

export default styles;
