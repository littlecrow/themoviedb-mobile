import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin
  },
  imgArea: {
    // backgroundColor: 'rgba(236,240,241,0.35)',
    marginRight: Metrics.baseMargin,
    width: 80,
    height: 100
  },
  infoArea: {
    backgroundColor: 'rgba(236,240,241,0.35)',
    padding: Metrics.basePadding,
    height: 100,
    flex: 1,
    justifyContent: 'space-around'
  },
  text: {
    color: 'white',
  }
});
