import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

const { baseMargin, smallMargin } = Metrics;

const PosterViewStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  firstItem: {
    marginTop: 0
  },
  basicInfo: {
    flex: 1,
    marginHorizontal: baseMargin,
    marginVertical: smallMargin,
    position: 'relative'
  },
  name: {
    fontSize: 16
  },
  text: {
    color: 'white'
  },
  popularity: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

export default PosterViewStyles;
