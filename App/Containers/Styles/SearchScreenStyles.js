import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes';

const { baseMargin } = Metrics;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    marginTop: baseMargin
  },
  emptyResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
