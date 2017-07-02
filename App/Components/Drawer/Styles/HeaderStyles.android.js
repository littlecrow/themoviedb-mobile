import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    // Config statusbar color
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.primaryDark, // StatusBar color
  },
  componentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.primary,
  },
  headerLeft: {
    paddingLeft: Metrics.basePadding
  },
  headerRight: {
    //paddingRight: Metrics.basePadding
  },
  title: {
    color: Colors.secondary,
    marginRight: 'auto',
    marginLeft: Metrics.headerTitleMargin
  },
  back: {
    color: Colors.secondary,
    backgroundColor: Colors.secondary
  }
});
