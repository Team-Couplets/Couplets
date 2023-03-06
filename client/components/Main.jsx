import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Homepage from "./Homepage";
import Message from "./Message";
import Profile from "./Profile";
import NavBar from "./NavBar";

export default function App() {
  const [displayHomepage, setDisplayHomepage] = useState(true);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
    <View style={styles.container}>
      {displayHomepage && <Homepage></Homepage>}
      {displayProfile && <Profile></Profile>}
      {displayMessage && <Message></Message>}
      <NavBar
        setDisplayHomepage={setDisplayHomepage}
        setDisplayProfile={setDisplayProfile}
        setDisplayMessage={setDisplayMessage}
      ></NavBar>
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
