import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingTop: 40,
    backgroundColor: '#081C24'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 40
  },
  bottom: {
    backgroundColor: 'white'
  }
});

export default styles;
