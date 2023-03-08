import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";

function Header(props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View style={styles.button}>
          <Button title="Logout" onPress={props.logout}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  safe: {
    flex: 0,
  },
  headerContainer: {
    margin: 0,
    padding: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    // backgroundColor: "#f2f2f2",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 60,
  },
  header: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    flex: 0.9,
    width: 180,
    height: 180,
    // resizeMode: "contain",
  },
  button: {
    // marginLeft: 50,
  },
});
