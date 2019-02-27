import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  formName: {
    borderColor: 'black',
    flex: 4,
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
  },
  formNameText: {
    fontSize: 22,
    textAlign: 'left',
    fontWeight: '500',
    color: 'black',
    alignSelf: 'stretch',
  },
  creationDetail: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 2,
  },
  creationText: {
    fontSize: 18,
    textAlign: 'right',
    fontWeight: '400',
    color: 'black',
    alignSelf: 'stretch',
    paddingRight: 30,
  },
});

export default styles;
