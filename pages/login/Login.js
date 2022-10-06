import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

const Login = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    console.log("Register", props);
    props.navigation.navigate("PlantDetail");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Hello</Text>
        <Text>Let’s Learn More About Plants</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(value) => setLoginData({ email: value })}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(value) => setLoginData({ password: value })}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forgotStyle}>
        <Text> Remember me</Text>
        <TouchableOpacity onPress={() => console.log("Forget Password")}>
          <Text style={{ color: "#6A6F7D" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <PrimaryButton title="LOGIN" onPress={() => handleLogin()} />
      <View style={styles.register}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text style={styles.signUp}> Sign Up</Text>
        </TouchableOpacity>
      </View>
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
