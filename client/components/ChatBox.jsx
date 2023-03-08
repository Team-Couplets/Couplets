import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ChatItem from "./ChatItem";
import messageData from "../messagesData";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function ChatBox(props) {
  function displayHandler() {
    props.setDisplayChatBox(false);
  }

  const [text, onChangeText] = React.useState("Useless Text");

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
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity style={styles.button}>
          <Text>Send</Text>
        </TouchableOpacity>
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
  inputBox: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "70%",
    marginBottom: 40,
  },
  button: {
    marginTop: 13,
    backgroundColor: "#46BCEC",
    width: "15%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ChatBox;
