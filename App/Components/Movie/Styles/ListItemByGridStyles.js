import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row'
  },
  itemContainer: {
    width: Metrics.screenWidth/2 - 10,
    margin: Metrics.baseMargin/2,
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  info: {
    padding: Metrics.basePadding/2
  },
  text: {
    color: 'white'
  }
});
