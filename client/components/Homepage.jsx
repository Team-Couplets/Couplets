import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import CardSlider from "./CardSlider";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function Homepage() {
  function dislikeHandler() {}
  function likeHandler() {}

  return (
    <View style={styles.homepage}>
      <View style={styles.poemContainer}>
        <CardSlider></CardSlider>
      </View>

      <View style={styles.matchContainer}>
        <TouchableOpacity onPress={dislikeHandler}>
          <View style={styles.circle}>
            <Image
              style={styles.navLogo}
              source={require("../assets/reject.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={likeHandler}>
          <View style={styles.circle}>
            <Image
              style={styles.navLogo}
              source={require("../assets/snap.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Homepage;

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  poemContainer: {
    marginTop: 20,
    height: "90%",
    width: "90%",
    padding: 10,
    backgroundColor: "#C3C8D3",
    borderRadius: 15,
    alignItems: "center",
  },
  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    top: -50,
  },
  navLogo: {
    height: 40,
    width: 40,
  },
  circle: {
    // backgroundColor: "#FB6D6C",
    backgroundColor: "#46BCEC",
    borderRadius: "100%",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
