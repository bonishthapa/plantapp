import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { Formik } from "formik";
import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const Login = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    console.log("Register", props);
    props.navigation.navigate("PlantDetail");
  };
  const onSubmitForm = (values) => {
    console.log("values", values);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Hello</Text>
        <Text>Let’s Learn More About Plants</Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={loginValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                name="email"
                placeholder="Email"
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View style={styles.forgotStyle}>
              <Text> Remember me</Text>
              <TouchableOpacity onPress={() => console.log("Forget Password")}>
                <Text style={{ color: "#6A6F7D" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <PrimaryButton title="LOGIN" onPress={handleSubmit} />
            <View style={styles.register}>
              <Text>Don’t have an account?</Text>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.signUp}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  headerView: {
    paddingTop: 110,
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    borderBottomColor: "#2DDA93",
  },
  inputView: {
    alignContent: "center",
    justifyContent: "center",
  },
  forgotStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  signUp: {
    color: "#2DDA93",
    fontWeight: "bold",
  },
  register: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Login;
