import { StyleSheet } from 'react-native';
import Metrics from '../../../Themes/Metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(254,254,254,0.5)',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  imgBackground: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingIcon: {
    width: 50,
  }
});
