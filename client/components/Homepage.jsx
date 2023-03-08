import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import CardSlider from "./CardSlider";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function Homepage() {
  return (
    <View style={styles.homepage}>
      <View style={styles.poemContainer}>
        {/* <Text style={styles.text}>
          " Yes !" I answered you last night ; {"\n"}" No !" this morning, Sir,
          I say {"\n"}! Colours, seen by candle-light, {"\n"} Will not look the
          same by day. {"\n"} {"\n"} When the tabors played their best, {"\n"}
          Lamps above, and laughs below — {"\n"}Love me sounded like a...
        </Text> */}
        <CardSlider></CardSlider>
      </View>

      <View style={styles.matchContainer}>
        <View style={styles.circle}>
          <Image
            style={styles.navLogo}
            source={require("../assets/reject.png")}
          />
        </View>
        <View style={styles.circle}>
          <Image
            style={styles.navLogo}
            source={require("../assets/snap.png")}
          />
        </View>
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
    backgroundColor: "#666f80",
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
    backgroundColor: "#FB6D6C",
    borderRadius: "100%",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
