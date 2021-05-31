import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,  SafeAreaView,Image } from "react-native";

export default function App() {
  const handlePass = () => {
    console.log("link clicked")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePass()}>Hey Tazwar you app working! yaay la la la la</Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <Image blurRadius={0.5} source={
        {
          width: 200,
          height: 200,
          uri:"https://picsum.photos/seed/picsum/200/300"

        }
      } />
    


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
