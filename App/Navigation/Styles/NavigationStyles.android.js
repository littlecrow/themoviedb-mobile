import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';
import { Constants } from 'expo';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: 75,
    // Config statusbar color
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.primaryDark, // StatusBar color
  },
  title: {
    color: Colors.secondary
  },
  back: {
    color: Colors.secondary,
    backgroundColor: Colors.secondary
  }
});
