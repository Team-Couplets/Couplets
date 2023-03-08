import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function NavBar(props) {
  function message() {
    props.setDisplayMessage(true);
    props.setDisplayHomepage(false);
    props.setDisplayProfile(false);
  }

  function homepage() {
    props.setDisplayMessage(false);
    props.setDisplayHomepage(true);
    props.setDisplayProfile(false);
  }

  function profile() {
    props.setDisplayMessage(false);
    props.setDisplayHomepage(false);
    props.setDisplayProfile(true);
  }

  return (
    <View style={styles.navbar}>
      <View style={styles.navitem}>
        <TouchableOpacity onPress={message}>
          <Image
            style={styles.navLogo}
            source={require("../assets/message.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navitem}>
        <TouchableOpacity onPress={homepage}>
          <Image
            style={styles.navLogo}
            source={require("../assets/home.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.navitem}>
        <TouchableOpacity onPress={profile}>
          <Image
            style={styles.navLogo}
            source={require("../assets/profile.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  navitem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  navLogo: {
    height: 40,
    width: 40,
  },
});
