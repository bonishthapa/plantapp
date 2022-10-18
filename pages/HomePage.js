import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const slideImage = [
  { key: 1, image: require("../assets/homepage.png"), title: "Hello" },
  { key: 2, image: require("../assets/homepage.png"), title: "Hello" },
  { key: 3, image: require("../assets/homepage.png"), title: "Hello" },
];

const { height, width } = Dimensions.get("window");

const HomePage = (props) => {
  const handlePress = () => {
    console.log("pressed");
  };

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const renderImage = ({ item }) => {
    return (
      <View>
        <Image
          source={require("../assets/homepage.png")}
          style={{ width, resizeMode: "contain", height: height * 0.75 }}
        />
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: "space-between",
          paddingHorizontal: width * 0.35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            // justifyContent: "space-between",
          }}
        >
          {slideImage.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: "background: rgba(45, 218, 147, 1)",
                },
              ]}
            ></View>
          ))}
        </View>
      </View>
    );
  };

  const updateIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        onMomentumScrollEnd={updateIndex}
        data={slideImage}
        renderItem={({ item }) => renderImage(item)}
        keyExtractor={(item) => item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Footer />
      <PrimaryButton
        title="NEXT"
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button}
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
  imageView: {
    width: "100%",
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: "background: rgba(219, 219, 219, 1)",
    marginHorizontal: 4,
  },
  button: {
    marginVertical: 20,
  },
});

export default HomePage;
