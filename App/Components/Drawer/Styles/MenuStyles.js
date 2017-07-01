import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.primaryDark, // StatusBar color
  },
  sideMenuHeader: {
    backgroundColor: Colors.peterRiver,
    height: 190,
    flexDirection: 'column',
    paddingTop: 40,
    paddingLeft: 16,
  },
  sideMenuHeaderInfoUser: {
    marginTop: Metrics.doubleBaseMargin
  },
  roundAvatar: {
    // marginTop: 40,
    // marginLeft: 16,
    height: 60,
    width: 60,
    borderRadius: 60
  },
  textHeaderInfoUser: {
    color: Colors.secondary
  },
  listMenu: {
    marginTop: Metrics.baseMargin
  },
  item: {
    flexDirection: 'row',
    paddingLeft: Metrics.doubleBaseMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  activeItem: {
    backgroundColor: Colors.primary
  },
  activeItemLabel: {
    color: Colors.secondary
  },
  icon: {
    width: 24, height: 24,
    marginRight: 16
  }
});
