import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  backgroundImage: {
    width: Metrics.screenWidth,
    height: '100%'
  },
  button: {
    width: '60%',
    marginBottom: Metrics.doubleBaseMargin
  }
});
