import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';
import { Constants } from 'expo';

export default StyleSheet.create({
  header: {
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: Colors.primaryDark, // StatusBar color
  },
  container: {
    flex: 1
  }
});
