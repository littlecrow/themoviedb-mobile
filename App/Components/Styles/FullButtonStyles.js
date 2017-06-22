import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  button: {
    height: 40,
    marginVertical: 5,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primaryDark,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    margin: 15,
    marginLeft: 0,
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
  },
  icon: {
    marginRight: Metrics.baseMargin / 2
  }
});
