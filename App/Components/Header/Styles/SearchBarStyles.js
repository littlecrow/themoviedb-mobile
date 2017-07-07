import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '../../../Themes';
import { Constants } from 'expo';

const { screenWidth, smallPadding, largeMargin, headerTitleMargin, doubleBasePadding, basePadding } = Metrics;
const { size } = Fonts;
const isAndroid = Platform.OS === 'android';

export default StyleSheet.create({
  container: {
    // Config statusbar color
    marginTop: isAndroid ? 0 : Constants.statusBarHeight,
    borderTopWidth: isAndroid ? Constants.statusBarHeight : 0,
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
    fontSize: size.input,
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

export const backIconSize = size.h4;
