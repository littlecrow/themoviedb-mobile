import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

const isAndroid = (Platform.OS === 'android');

const MovieDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
  },
  modal: {
    marginTop: Constants.statusBarHeight
  }
});

export default MovieDetailScreenStyles;
