import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  Alert,
} from "react-native";

export default function App() {
  const handlePass = () => {
    console.log("link clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={
          () => {
            // Alert.prompt("yoo", "yooo bhai kichu likhen", (text) =>
            //   console.log(text)
            // );
            Alert.alert("Die", "Do you wanna die right now?", [
              {
                text: "Yesss!",
                onPress: () => console.log("clicked affirmative, call azrail"),
              },
              {
                text: "Noo!",
                onPress: () =>
                  console.log("clicked negative, dont call azrail"),
              },
            ]);
          }
          // () => console.log("button clicked")
        }
        title="Click me"
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
      <Text style={styles.btnStyle} onPress={handlePass()}>
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
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  btnStyle: {
    color: "red",
    backgroundColor: "green",
  },
});
