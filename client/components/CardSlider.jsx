import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import CardItem from "./CardItem";

export default CardSlider = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(props.poems)}
        renderItem={({ item }) => (
          <CardItem item={props.poems[item]} keyval={item} />
        )}
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
