import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

const { smallMargin, smallPadding } = Metrics;

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemContainer: {
    marginVertical: smallMargin,
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  info: {
    padding: smallPadding
  },
  text: {
    color: 'white'
  },
  loadingImage: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  firstItem: {
    marginLeft: smallMargin
  },
  lastItem: {
    marginRight: smallMargin
  }
});
