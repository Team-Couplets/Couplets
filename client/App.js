import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Hey Jason, Jordan and Santi</Text>
      {/* <LoginScreen></LoginScreen> */}
      <RegisterScreen></RegisterScreen>
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
