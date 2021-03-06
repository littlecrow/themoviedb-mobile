import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics } from '../../../Themes';
import { Constants } from 'expo';

const isAndroid = Platform.OS === 'android';

export default StyleSheet.create({
  container: {
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: isAndroid ? Colors.primaryDark : 'transparent', // StatusBar color
    height: Metrics.screenHeight - Constants.statusBarHeight,
    backgroundColor: 'white',
    flex: 1
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
  listMenuBottom: {
    marginTop: 'auto'
  },
  item: {
    flexDirection: 'row',
    paddingLeft: Metrics.doubleBaseMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  activeItem: {
    backgroundColor: Colors.peterRiver
  },
  activeItemLabel: {
    color: Colors.secondary
  },
  icon: {
    width: 24, height: 24,
    marginRight: 16
  }
});
