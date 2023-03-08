import { StatusBar } from "expo-status-bar";
import { useState, Fragment, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Homepage from "./Homepage";
import Message from "./Message";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Header from "./Header";
import ChatBox from "./ChatBox";

export default function App(props) {
  const [displayHomepage, setDisplayHomepage] = useState(true);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayChatBox, setDisplayChatBox] = useState(false);

  return (
    <Fragment>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: "white" }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
          position: "relative",
        }}
      >
        <Header logout={props.logout}></Header>
        {displayHomepage && <Homepage></Homepage>}
        {displayProfile && <Profile email={props.email}></Profile>}
        {displayMessage && !displayChatBox && (
          <Message setDisplayChatBox={setDisplayChatBox}></Message>
        )}
        {displayChatBox && (
          <ChatBox setDisplayChatBox={setDisplayChatBox}></ChatBox>
        )}
        <NavBar
          setDisplayHomepage={setDisplayHomepage}
          setDisplayProfile={setDisplayProfile}
          setDisplayMessage={setDisplayMessage}
        ></NavBar>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#f2f2f2",
  },
});
