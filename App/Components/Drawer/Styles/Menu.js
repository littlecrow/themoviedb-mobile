import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

const styles = StyleSheet.create({
  headerPadding: {
  },
  sideMenuHeader: {
    backgroundColor: Colors.primary,
    height: 190,
    flexDirection: 'column',
    paddingTop: 40,
    paddingLeft: 16
  },
  sideMenuHeaderInfoUser: {
    // marginLeft: 16,
    marginTop: 20
  },
  roundAvatar: {
    // marginTop: 40,
    // marginLeft: 16,
    height: 60,
    width: 60,
    borderRadius: 60
  },
  sideMenuListMenu: {
    marginLeft: 16
  },
  groupLabel: {
    flexDirection: 'row',
    paddingTop: 20
  },
  icon: {
    width: 24, height: 24,
    marginRight: 16
  }
});

export default styles;
