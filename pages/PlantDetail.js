import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

const PlantDetail = () => {
  return (
    <View>
      {/* <StatusBar
        barStyle="light-content"
        showHideTransition="none"
        hidden={false}
      /> */}
      <Image
        source={require("../assets/detail.png")}
        style={styles.headerImage}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.detailTitle}>Spinach</Text>
        <Text>star</Text>
        <Text>Description</Text>
        <Text style={styles.description}>
          Spinach is thought to have originated in ancient Persia (modern Iran
          and neighboring countries). It is not known by whom, or when, spinach
          was introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ introduced to India,
          but the plant was subsequ ently introduced to ancient China, where it
          was known as "Persian vegetable" Spinach is thought to have or
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable" Spinach is
          thought to have originated in ancient Persia (modern Iran and
          neighboring countries). It is not known by whom, or when, spinach was
          introduced to India, but the plant was subsequ ently introduced to
          ancient China, where it was known as "Persian vegetable"
        </Text>
      </ScrollView>
      {/* <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
  },
  container: {
    // position: "relative",
    // flex: 2,
    // padding: 20,
    // marginBottom: 400,
    // height: 20,
    padding: 20,
    // maxHeight: 10,
  },
  detailTitle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default PlantDetail;
