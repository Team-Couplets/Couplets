import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import MessageItem from "./MessageItem";
import messageData from "../messagesData";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function Message(props) {
  return (
    <View style={styles.homepage}>
      <FlatList
        data={messageData}
        renderItem={({ item }) => (
          <MessageItem
            setDisplayChatBox={props.setDisplayChatBox}
            item={item}
          />
        )}
        bounces={false}
      />
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
  text: {
    fontSize: 25,
    fontWeight: 700,
    color: "#46BCEC",
  },
});

export default Message;
