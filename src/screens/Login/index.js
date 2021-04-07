import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import axios from "axios";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { updateUserId } from "../../redux/action";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = textValue => setEmail(textValue);
  const onChangePassword = textValue => setPassword(textValue);
  const dispatch = useDispatch()

  const logUserIn = () => {
    axios.post('http://0.0.0.0:4000/user/',{email, password})
      .then((res) => {
      const {id} = res.data
        dispatch(updateUserId(id))
        navigation.navigate('Tabs')
    })
      .catch(() => Alert.alert('Error', 'Incorrect email or password', 'Ok'))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>TO DO LIST</Text>
      <TextInput style={styles.input} placeholder="Email.." onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password.."
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={logUserIn}>
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
