import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default PrimaryButton = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonStye} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{title || "NEXT"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStye: {
    backgroundColor: "#2DDA93",
    height: 50,
    width: 329,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
