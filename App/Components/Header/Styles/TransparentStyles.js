import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Metrics, Colors, Fonts } from '../../../Themes';

const TransparentHeaderStyles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    // left: 0, right: 0
  },
  headerContainer: {
    backgroundColor: Colors.primary
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
