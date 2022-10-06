import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const RectangleComponent = (props) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      src: "../assets/recimage.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d78",
      title: "Third Item",
      src: "../assets/recimage.png",
    },
  ];

  const Item = ({ src }) => (
    <View style={styles.item}>
      <Image
        source={require("../assets/recimage.png")}
        style={styles.rectangleImage}
      />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.src} />;

  return (
    <View>
      <Text style={styles.title}>{props.title || ""}</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  rectangleImage: {
    height: 160,
    width: 299,
    borderRadius: 3,
    marginRight: 20,
    marginTop: 15,
  },
});

export default RectangleComponent;
