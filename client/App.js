import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import Oauth from "./components/Oauth";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.mainLogo}
          source={require("../client/assets/logo.png")}
        />
      </View>
      {/* LoginPage Comopnent */}
      <LoginPage />
      {/* Apple Oauth Button */}
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
    height: 57
  },
  mainLogo: {
    width: 350,
    resizeMode: "contain"
  }
});
