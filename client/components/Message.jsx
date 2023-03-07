import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

function Message() {
  return (
    <View style={styles.homepage}>
      <Text>message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: "#666f80",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Message;
