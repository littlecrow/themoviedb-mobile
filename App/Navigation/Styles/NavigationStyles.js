import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';
import { Constants } from 'expo';

export default StyleSheet.create({
  header: {
    //backgroundColor: Colors.primary,
    marginTop: Constants.statusBarHeight
  },
  title: {
    color: Colors.secondary
  },
  back: {
    color: Colors.secondary,
    backgroundColor: Colors.secondary
  }
});
