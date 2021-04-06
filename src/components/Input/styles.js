import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: windowWidth - 80,
    fontSize: 22,
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
  button: {
    paddingRight: 20,
    marginTop: 10,
  },
});
