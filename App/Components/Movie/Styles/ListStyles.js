import { StyleSheet, Dimensions } from 'react-native';

const WINDOW = Dimensions.get('window');
const SCREEN_WIDTH = WINDOW.width,
  SCREEN_HEIGHT = WINDOW.height;

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  imgBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
});
