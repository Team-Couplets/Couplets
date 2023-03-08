import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default MessageItem = ({ item, setDisplayChatBox }) => {
  function displayHandler() {
    setDisplayChatBox(true);
  }

  return (
    <TouchableOpacity onPress={displayHandler}>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={require("../assets/profilepic.png")}
        />
        <View>
          <Text style={styles.text}>{item.person}</Text>
          <Text>{item.messages[item.messages.length - 1].message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 30,
    alignItems: "center",
    borderColor: "black",
    width: 400,
    height: 100,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#46BCEC",
    lineHeight: 30,
  },
  photo: {
    height: 60,
    width: 60,
    marginRight: 30,
  },
});
