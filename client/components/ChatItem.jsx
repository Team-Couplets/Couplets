import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default ChatItem = ({ item }) => {
  // console.log(item.messages[0].message);
  const listMessages = item.messages.map((el) => {
    return (
      <View style={styles.blueBubble}>
        {/* <Text>{el.person}</Text> */}
        <Text style={styles.text}>{el.message}</Text>
      </View>
    );
  });

  return <View>{listMessages}</View>;
};

const styles = StyleSheet.create({
  blueBubble: {
    backgroundColor: "#46BCEC",
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
