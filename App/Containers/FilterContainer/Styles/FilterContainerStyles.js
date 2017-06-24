import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    backgroundColor: Colors.primary
  },
  indicator: {
    backgroundColor: Colors.inverse,
    height: 4
  }
});
