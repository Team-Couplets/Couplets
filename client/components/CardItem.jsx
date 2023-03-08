import React from "react";
import { useWindowDimensions } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default CardItem = ({ item, keyval }) => {
  if (keyval !== "email" && item !== null) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#C3C8D3",
    minWidth: 325,
    maxWidth: 325,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
});
