import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../../Themes';

const { itemInRow, screenWidth, basePadding, smallMargin, smallPadding } = Metrics;
/*
Calculate width for each item:
Based on: itemInRow, itemMarginLeftRight, screenWidth, screenPadding (also basePadding)
=> marginBetweenItems (left, right) = itemMarginLeftRight * 2 * itemInRow
=> itemWidth = (screenWidth - screenPadding - marginBetweenItems) / itemInRow
 */
const itemWidth = (screenWidth - basePadding - (smallMargin * 2 * itemInRow)) / itemInRow;
const imageWidth = itemWidth;
const imageHeight = imageWidth / 1.8;

export default StyleSheet.create({
  itemContainerLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    width: itemWidth,
    marginTop: smallMargin,
    marginBottom: smallMargin,
    backgroundColor: 'rgba(0,0,0,0.75)'
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
  }
});
