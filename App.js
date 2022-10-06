import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./pages/login/Login.js";
import Register from "./pages/login/Register.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage.js";
import Dashboard from "./pages/Dashboard.js";
import PlantDetail from "./pages/PlantDetail.js";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    padding: 30,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
