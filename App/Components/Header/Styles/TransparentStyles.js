import { StyleSheet } from 'react-native';
import { Constants } from 'exponent';
import metrics  from '../../../Themes/Metrics';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';

const TransparentHeaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    left: 0, right: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.125)'
  },
  back: {
    ...fonts.style.h5,
    color: colors.secondary,
    marginRight: metrics.baseMargin,
    padding: metrics.baseMargin,
    borderRadius: 500
  },
  title: {
    ...fonts.style.h5,
    color: colors.secondary,
    padding: metrics.baseMargin
  }
});

export default TransparentHeaderStyles;
