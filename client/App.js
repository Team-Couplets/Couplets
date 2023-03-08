import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import Oauth from "./components/Oauth";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Apple OAuth */}
      <Oauth />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 240,
    height: 57,
  }
});
