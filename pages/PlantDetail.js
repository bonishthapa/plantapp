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
        <View>
          <Text style={styles.detailTitle}>Spinach</Text>
        </View>
        <View>
          <Text>star</Text>
        </View>
        <View>
          <Text>Description</Text>
          <Text>
            Spinach is thought to have originated in ancient Persia (modern Iran
            and neighboring countries). It is not known by whom, or when,
            spinach was introduced to India, but the plant was subsequ ently
            introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable" Spinach is thought to have originated in ancient Persia
            (modern Iran and neighboring countries). It is not known by whom, or
            when, spinach was introduced to India, but the plant was subsequ
            ently introduced to ancient China, where it was known as "Persian
            vegetable"
          </Text>
        </View>
      </ScrollView>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 393,
  },
  container: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 27,
    fontWeight: "bold",
  },
});

export default PlantDetail;
