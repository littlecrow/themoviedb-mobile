import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const MovieDetailScreenStyles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2
  },
  content: {
    marginTop: Constants.statusBarHeight
  }
});

export default MovieDetailScreenStyles;
