import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import metrics  from '../../../Themes/Metrics';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';

const TransparentHeaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    left: 0, right: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.35)'
  },
  back: {
    ...fonts.style.h5,
    color: colors.secondary,
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin/2,
    padding: metrics.baseMargin
  },
  title: {
    ...fonts.style.h5,
    color: colors.secondary,
    padding: metrics.baseMargin
  }
});

export default TransparentHeaderStyles;
