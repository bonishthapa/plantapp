import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const HomePage = (props) => {
  const handlePress = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/homepage.png")} />
      <PrimaryButton
        title="NEXT"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
