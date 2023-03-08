import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

function Header(props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Couplets</Text>
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
    backgroundColor: "#666f80",
    // backgroundColor: "#f2f2f2",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    color: "#FB6D6C",
    fontSize: 20,
    fontWeight: 700,
  },
  button: {
    // marginLeft: 50,
  },
});
