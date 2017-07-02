import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Metrics, Colors, Fonts } from '../../../Themes';

const TransparentHeaderStyles = StyleSheet.create({
  container: {
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.inverse, // StatusBar color
  },
  headerContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  componentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    // paddingTop: Metrics.doubleBasePadding,
    // paddingBottom: Metrics.doubleBasePadding,
    paddingLeft: Metrics.doubleBasePadding,
    paddingRight: Metrics.doubleBasePadding
  },
  title: {
    color: Colors.secondary,
    marginRight: 'auto',
    marginLeft: Metrics.headerTitleMargin
  },
});

export const backIconSize = Fonts.size.h4;
export default TransparentHeaderStyles;
