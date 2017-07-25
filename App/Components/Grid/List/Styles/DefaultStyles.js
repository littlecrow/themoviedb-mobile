import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { baseMargin, basePadding, smallMargin, screenWidth } = Metrics;

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: smallMargin,
    marginHorizontal: baseMargin,
  },
  imageArea: {
    marginRight: baseMargin,
    width: '100%',
    height: (screenWidth - baseMargin * 2) / 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative'
  },
  image: {
    height: '100%',
    resizeMode: 'cover'
  },
  infoArea: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: basePadding,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0
  },
  text: {
    color: 'white',
  },
  title: {
    fontSize: 16,
  },
  lastItem: {
    marginBottom: baseMargin
  }
});
