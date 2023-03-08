import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  FlatList,
} from "react-native";
import ChatItem from "./ChatItem";
import messageData from "../messagesData";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function ChatBox(props) {
  function displayHandler() {
    props.setDisplayChatBox(false);
  }

  return (
    <View>
      <Button onPress={displayHandler} title="Back" />
      <View style={styles.homepage}>
        <FlatList
          data={messageData}
          renderItem={({ item }) => <ChatItem item={item} />}
          bounces={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatBox;
