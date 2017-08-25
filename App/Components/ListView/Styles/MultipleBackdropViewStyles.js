import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

const { smallMargin, smallPadding } = Metrics;

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemContainer: {
    marginVertical: smallMargin
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'relative'
  },
  info: {
    padding: smallPadding,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.65)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loadingImage: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  text: {
    color: 'white'
  },
  firstItem: {
    marginLeft: smallMargin
  },
  lastItem: {
    marginRight: smallMargin
  },
  firstRow: {
    marginTop: 0
  }
});
