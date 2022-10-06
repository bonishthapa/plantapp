import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const VerticalCard = (props) => {
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
    <View>
      <Image
        source={require("../assets/image_2.png")}
        style={styles.rectangleImage}
      />
      <View style={styles.textStyle}>
        <Text>#Mini</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.src} />;

  return (
    <View>
      <Text>{props.title || ""}</Text>
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
  rectangleImage: {
    height: 144,
    width: 126,
    borderRadius: 3,
    marginRight: 20,
    marginTop: 15,
  },
  textStyle: {
    display: "flex",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginTop: 119,
    width: 50,
    height: 20,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VerticalCard;
