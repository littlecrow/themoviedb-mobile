import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

const isAndroid = (Platform.OS === 'android');

export const buttonColor = isAndroid ? Colors.secondary : Colors.inverse;

const styles = StyleSheet.create({
  container: {
  }
});

export default styles;
