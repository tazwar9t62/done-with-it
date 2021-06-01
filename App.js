import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  const handlePass = () => {
    console.log("link clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => console.log("button clicked")}
        title="Click me"
        color="red"
      ></Button>
      <TouchableOpacity onPress={() => console.log("image clicked")}>
        <Image
          blurRadius={0.5}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/seed/picsum/200/300",
          }}
        />
      </TouchableOpacity>
      <Text onPress={handlePass()}>
        Hey Tazwar you app working! yaay la la la la
      </Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
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
