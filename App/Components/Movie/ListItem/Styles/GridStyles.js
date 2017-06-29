import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../../../Themes';

const { itemInRow, screenWidth, smallMargin, smallPadding } = Metrics;
/*
Calculate width for each item:
Based on: itemInRow, itemMarginLeftRight, screenWidth
=> marginBetweenItems (left, right) = itemMarginLeftRight * 2 * itemInRow
=> itemWidth = (screenWidth - marginBetweenItems) / itemInRow
 */
const itemWidth = (screenWidth - (smallMargin * 2 * itemInRow)) / itemInRow;
const imageWidth = itemWidth;
const imageHeight = imageWidth / 1.8;

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemContainer: {
    width: itemWidth,
    marginVertical: smallMargin,
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  image: {
    width: imageWidth,
    height: imageHeight
  },
  emptyImage: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: Colors.carrot
  },
  info: {
    padding: smallPadding
  },
  text: {
    color: 'white'
  },
  loadingImage: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: imageHeight
  },
  firstItem: {
    marginLeft: smallMargin
  },
  lastItem: {
    marginRight: smallMargin
  }
});
