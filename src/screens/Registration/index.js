import React from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import axios from "axios";

import {styles} from "./styles";

const regEx = {
  upperCase: /(?=.*[A-Z])/,
  numeric: /(?=.*[0-9])/
}

const signUpSchema = yup.object().shape({
  username: yup.string()
  .min(4, '* Your username must contain at least 4 characters')
  .required('* Enter username'),
  email: yup.string()
  .email('* Enter valid email')
  .required('* Enter email'),
  password: yup.string()
  .matches(regEx.upperCase, '* Password must contain at least 1 uppercase alphabetical character')
  .matches(regEx.numeric, '* Password must contain at least 1 numeric character')
  .min(8, '* Your password must contain at least 8 characters')
  .required('* Enter password'),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password')], '* Passwords do not match')
  .required('* Confirm password'),
});
const initialValues = { username: "", email: "", password: "", confirmPassword: "" }


const Registration = ({ navigation }) => {
  const registerUser = (name, email, password) => {
    axios.post('http://0.0.0.0:4000/user/signup', {name, email, password})
    .then(() => navigation.navigate('Login') )
    .catch(() => Alert.alert('Error', 'This email address is already being used', 'Ok'))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Registration</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          const {username, email, password} = values
          registerUser(username, email, password)
        }}
        validationSchema={signUpSchema}

      >{({ handleChange, values, handleSubmit, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username.."
              onChangeText={handleChange("username")}
              value={values.username}
              />
            {errors.username &&
            <Text style={styles.errorMessage}>{errors.username}</Text>
            }
            <TextInput
              style={styles.input}
              placeholder="Email.."
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {errors.email &&
            <Text style={styles.errorMessage}>{errors.email}</Text>
            }
            <TextInput
              style={styles.input}
              placeholder="Password.."
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {errors.password &&
            <Text style={styles.errorMessage}>{errors.password}</Text>
            }
            <TextInput
              style={styles.input}
              placeholder="Confirm Password.."
              secureTextEntry={true}
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
            />
            {errors.confirmPassword &&
            <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
            }
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )
      }
      </Formik>
      <View style={styles.dontHaveAnAccountView}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUpButton}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Registration;
