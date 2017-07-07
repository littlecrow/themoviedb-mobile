import { StyleSheet } from 'react-native';
import metrics  from '../../../Themes/Metrics';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';

export default StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * -1,
    marginTop: metrics.baseMargin,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: metrics.baseMargin,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    marginBottom: metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.inverse
  },
  itemLine: {
    flexDirection: 'row',
    marginBottom: metrics.smallMargin
  },
  itemImage: {
    width: metrics.doubleBasePadding,
    height: metrics.doubleBasePadding,
    borderRadius: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  itemAuthorText: {
    fontSize: fonts.size.medium,
    fontWeight: 'bold'
  },
  itemContentText: {
    fontSize: fonts.size.small,
    marginBottom: metrics.baseMargin
  }
});
