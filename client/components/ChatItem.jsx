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
      <View>
        <Text>{el.person}</Text>
        <Text>{el.message}</Text>
      </View>
    );
  });

  return <View>{listMessages}</View>;
};

const styles = StyleSheet.create({});
