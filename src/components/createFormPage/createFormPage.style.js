import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  createFormContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  formNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  addFieldContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    paddingRight: 20,
  },
  addFieldText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    backgroundColor: '#3f51b5',
    padding: 10,
  },
  saveButtonContainer: {
    backgroundColor: '#3f51b5',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
