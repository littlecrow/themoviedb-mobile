import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../../Themes';

const { basePadding, doubleBasePadding, screenWidth } = Metrics;

export default StyleSheet.create({
  text: {
    fontSize: 18
  },
  title: {
    fontSize: 20
  },
  menuIcon: {
    paddingHorizontal: basePadding
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.cloudes,
    width: screenWidth - 50,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: basePadding,
    paddingHorizontal: doubleBasePadding
  },
  modalFooter: {
    borderTopWidth: 0.5,
    borderBottomColor: 'white',
    flexDirection: 'row',
    paddingVertical: basePadding,
    justifyContent: 'center'
  },
  modalBodyContent: {
    paddingHorizontal: doubleBasePadding,
    paddingVertical: doubleBasePadding
  }
});
