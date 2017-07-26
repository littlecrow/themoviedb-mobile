import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

const { doubleSection } = Metrics;

const PosterViewStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  profileImage: {
    width: doubleSection,
    height: doubleSection,
  },
  firstItem: {
    marginTop: 0
  },
  text: {
    color: 'white'
  }
});

export default PosterViewStyles;
