import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
  },
  headLine: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
  },
  input: {
    width: windowWidth - 60,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },
  button: {
    width: windowWidth - 60,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    marginLeft: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dontHaveAnAccountView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  signUpButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dontHaveAnAccountText: {
    fontSize: 16,
  },
});
