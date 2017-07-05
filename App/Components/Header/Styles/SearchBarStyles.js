import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../../Themes';
import { Constants } from 'expo';

const { screenWidth, smallPadding, largeMargin, headerTitleMargin, doubleBasePadding, basePadding } = Metrics;

export default StyleSheet.create({
  container: {
    // Config statusbar color
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.primaryDark, // StatusBar color,
  },
  componentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row'
  },
  headerLeft: {
    paddingLeft: basePadding
  },
  headerRight: {
    width: screenWidth - largeMargin,
  },
  searchInput: {
    width: '100%',
    paddingVertical: basePadding,
    paddingHorizontal: smallPadding,
    fontSize: 18,
    color: Colors.secondary
  },
  title: {
    color: Colors.secondary,
    marginRight: 'auto',
    marginLeft: headerTitleMargin
  },
  back: {
    paddingLeft: doubleBasePadding,
    paddingRight: doubleBasePadding
  },
});

export const backIconSize = Fonts.size.h4;
