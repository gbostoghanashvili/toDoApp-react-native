import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const LoginView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>TO DO LIST</Text>
      <TextInput style={styles.input} placeholder="Email.." />
      <TextInput
        style={styles.input}
        placeholder="Password.."
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('login button clicked')}>
        <Text style={styles.buttonText}>Login </Text>
      </TouchableOpacity>
      <View style={styles.dontHaveAnAccountView}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity onPress={() => console.log('login button clicked')}>
          <Text style={styles.signUpButton}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginView;
