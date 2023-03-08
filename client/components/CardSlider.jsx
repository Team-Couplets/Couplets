import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import poems from "../poems";
import CardItem from "./CardItem";

export default CardSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={poems}
        renderItem={({ item }) => <CardItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
