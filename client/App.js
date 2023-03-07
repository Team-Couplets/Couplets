import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import SetupScreen from "./src/screens/SetupScreen";

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Hey Jason, Jordan and Santi</Text>
      {/* <LoginScreen></LoginScreen> */}
      <SetupScreen></SetupScreen>
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
});
