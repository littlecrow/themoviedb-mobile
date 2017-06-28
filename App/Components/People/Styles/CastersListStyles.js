import { StyleSheet } from 'react-native';
import metrics  from '../../../Themes/Metrics';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';

export default StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin
  },
  loadingContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    marginRight: metrics.doubleBaseMargin,
    width: 100
  },
  itemImage: {
    width: '100%',
    height: 120
  },
  whiteText: {
    color: colors.secondary,
    fontSize: fonts.size.small
  }
});
