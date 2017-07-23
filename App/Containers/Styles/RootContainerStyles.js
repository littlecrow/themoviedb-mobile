import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1
  },
  backgroundImage: {
    width: Metrics.screenWidth,
    height: '100%'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});
