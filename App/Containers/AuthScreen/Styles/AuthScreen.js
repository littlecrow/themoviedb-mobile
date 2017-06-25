import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingTop: 24,
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 60
  },
  bottom: {
    backgroundColor: '#1976D2'
  }
});

export default styles;
