import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import RectangleComponent from "../components/RectangleComponent";
import VerticalCard from "../components/VerticalCard";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <View>
            <Text style={styles.mainText}>Dashboard</Text>
            <Text style={styles.secondaryText}>
              Let’s Learn More About Plants
            </Text>
          </View>
          <Image
            source={require("../assets/ellipse.png")}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.searchItem}>
        <TextInput placeholder="Search For Plants" style={styles.search} />
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <RectangleComponent title="Plant Types" />
        </View>
        <View style={{ padding: 20 }}>
          <VerticalCard title="Photography" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 30,
    backgroundColor: "#fff",
  },
  header: {
    height: 172,
    backgroundColor: "#61D2C4",
  },
  headerItem: {
    padding: 30,
    paddingTop: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    height: 47,
    width: 47,
  },
  search: {
    width: 329,
    marginTop: -20,
    borderColor: "#fff",
  },
});

export default Dashboard;
