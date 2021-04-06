import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';

const windowWidth = Dimensions.get("window").width;
const regEx = {
  upperCase: /(?=.*[A-Z])/,
  numeric: /(?=.*[0-9])/
}

const signUpScema = yup.object().shape({
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

const Registration = ({ navigation }) => {
  const initialValues = { username: "", email: "", password: "", confirmPassword: "" }
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Registration</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
            console.log(values)
        }}
        validationSchema={signUpScema}

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 100,
  },
  headLine: {
    fontWeight: "bold",
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
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  dontHaveAnAccountView: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  signUpButton: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dontHaveAnAccountText: {
    fontSize: 16,
  },
  errorMessage: {
    marginTop: 1,
    fontSize: 10,
    color: 'red',
  },
});

export default Registration;
