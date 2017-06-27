import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    width: (Metrics.screenWidth - 30)/2,
    marginTop: Metrics.baseMargin/2,
    marginBottom: Metrics.baseMargin/2,
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  firstItem: {
    marginRight: Metrics.basePadding/2
  },
  info: {
    padding: Metrics.basePadding/2
  },
  text: {
    color: 'white'
  }
});
