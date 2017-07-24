import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  overlayView: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});
