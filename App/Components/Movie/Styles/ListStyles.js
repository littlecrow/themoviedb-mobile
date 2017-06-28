import { StyleSheet } from 'react-native';
import Metrics from '../../../Themes/Metrics';

const { screenWidth, screenHeight, basePadding } = Metrics;

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: basePadding,
    paddingBottom: basePadding,
    width: screenWidth,
    height: screenHeight - 106
  },
  bgImage: {
    width: screenWidth,
    height: screenHeight
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
