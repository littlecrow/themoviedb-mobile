import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { baseMargin, basePadding, smallMargin } = Metrics;

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: smallMargin,
    marginHorizontal: baseMargin,
  },
  imageArea: {
    marginRight: baseMargin,
    width: 68,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
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
