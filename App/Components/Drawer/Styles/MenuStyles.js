import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

const styles = StyleSheet.create({
  sideMenuHeader: {
    backgroundColor: Colors.primary,
    height: 190,
    flexDirection: 'column',
    paddingTop: 40,
    paddingLeft: 16,
    borderTopWidth: 2,
    borderTopColor: Colors.primaryDark, // StatusBar color
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

export default styles;
