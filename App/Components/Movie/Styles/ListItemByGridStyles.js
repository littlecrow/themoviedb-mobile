import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes';

const { itemInRow, itemMarginLeftRight, screenWidth, basePadding, baseMargin } = Metrics;
/*
Calculate width for each item:
Based on: itemInRow, itemMarginLeftRight, screenWidth, screenPadding (also basePadding)
=> marginBetweenItems (left, right) = itemMarginLeftRight * 2 * itemInRow
=> itemWidth = (screenWidth - screenPadding - marginBetweenItems) / itemInRow
 */
const itemWidth = (screenWidth - basePadding - (itemMarginLeftRight * 2 * itemInRow)) / itemInRow;
const smallMargin = baseMargin / 2;
const smallPadding = basePadding / 2;

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
  info: {
    padding: smallPadding
  },
  text: {
    color: 'white'
  }
});
