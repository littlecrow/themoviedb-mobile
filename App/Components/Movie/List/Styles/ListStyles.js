import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { screenWidth, screenHeight, basePadding, doubleBasePadding } = Metrics;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: basePadding,
    width: screenWidth,
    height: screenHeight - 100
  },
  bgImage: {
    width: screenWidth,
    height: screenHeight
  },
  loadingIcon: {
    paddingVertical: doubleBasePadding
  }
});
