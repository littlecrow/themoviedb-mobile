import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primaryDark,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    margin: 15,
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: Fonts.size.medium,
  }
});
