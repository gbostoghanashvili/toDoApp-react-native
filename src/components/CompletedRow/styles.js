import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#eee',
    height: 50,
  },
  nestedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#eee',
    borderRadius: 5,
    height: 40,
    width: windowWidth - 90,
    paddingLeft: 10,
  },
  checkbox: {
    borderColor: "lightgrey",
    borderWidth: 0.5,
  },
});
