import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { screenWidth, screenHeight, basePadding } = Metrics;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: basePadding,
    paddingBottom: basePadding,
    width: screenWidth,
    height: screenHeight - 100
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
