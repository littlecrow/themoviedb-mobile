import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

const { basePadding, doubleBasePadding } = Metrics;

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    marginVertical: basePadding
  },
  loadingIcon: {
    paddingVertical: doubleBasePadding
  }
});
