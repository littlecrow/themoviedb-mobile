import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  componentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.primary,
  },
  headerLeft: {
    paddingLeft: Metrics.basePadding
  },
  headerRight: {
    //paddingRight: Metrics.basePadding
  },
  title: {
    color: Colors.secondary,
    marginRight: 'auto',
    marginLeft: Metrics.headerTitleMargin
  },
  back: {
    color: Colors.secondary,
    backgroundColor: Colors.secondary
  }
});
