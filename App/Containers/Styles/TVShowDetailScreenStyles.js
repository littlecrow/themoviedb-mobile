import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

const isAndroid = (Platform.OS === 'android');

const MovieDetailScreenStyles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: isAndroid ? 0 : Constants.statusBarHeight
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2
  },
  content: {
    marginTop: isAndroid ? Constants.statusBarHeight : 0
  }
});

export default MovieDetailScreenStyles;
