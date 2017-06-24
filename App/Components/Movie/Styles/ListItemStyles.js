import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin,
  },
  imgArea: {
    marginRight: Metrics.baseMargin,
    width: 68,
    height: 100
  },
  img: {
    width: '100%',
    height: '100%'
  },
  infoArea: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    padding: Metrics.basePadding,
    height: 100,
    flex: 1,
    justifyContent: 'space-around'
  },
  text: {
    color: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  lastItem: {
    marginBottom: Metrics.baseMargin
  }
});
