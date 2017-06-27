import { StyleSheet } from 'react-native';
import Metrics from '../../../Themes/Metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: Metrics.basePadding,
    paddingBottom: Metrics.basePadding,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  bgImage: {
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
