import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { baseMargin, doubleBaseMargin , basePadding, smallMargin } = Metrics;

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: smallMargin,
    marginBottom: smallMargin,
    marginRight: doubleBaseMargin,
    marginLeft: doubleBaseMargin,
  },
  imgArea: {
    marginRight: baseMargin,
    width: 68,
    height: 100
  },
  img: {
    width: '100%',
    height: '100%'
  },
  infoArea: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: basePadding,
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
    marginBottom: baseMargin
  }
});
