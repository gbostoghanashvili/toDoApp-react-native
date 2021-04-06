import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from "./styles";

const Login = ({navigation}) => {
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
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login </Text>
      </TouchableOpacity>
      <View style={styles.dontHaveAnAccountView}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.signUpButton}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
