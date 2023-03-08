import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import PoemEdit from "./Poemedit";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

function Profile() {
  const [poems, setPoems] = useState([
    "Curtains forcing their will against the wind, children sleep, exchanging dreams with seraphim. The city drags itself awake on subway straps; and I, an alarm, awake as a rumor of war, lie stretching into dawn, unasked and unheeded",
    "I'm telling the wrong lies, they are not even useful. The right lies would at least be keys, they would open the door. The door is closed; the chairs, the tables, the steel bowl, myself shaping bread in the kitchen, wait outside it.",
  ]);

  const [penName, setPenName] = useState("Fumunda");
  const [firstName, setFirstName] = useState("Dan");
  const [lastName, setLastName] = useState("McLovin");
  const [birthday, setBirthday] = useState("09/25/1997");
  const [bio, setBio] = useState(
    "On a scale from one to Slurpees on 7/11: how free are you tonight?"
  );
  const [location, setLocation] = useState("San Francisco");

  //change view based on state
  const [addPoem, setAddPoem] = useState(0);

  useEffect(() => {}, []);

  //function passed to the PoemEdit component to chnage state
  const goBackFunc = (arg) => {
    setAddPoem(arg);
  };

  //box up all the poems to display edit components
  boxes = poems.map((poem, index) => {
    return (
      <TouchableOpacity
        style={styles.poemContainer}
        key={index}
        onPress={() => setAddPoem(index + 1)}
      >
        <Text style={styles.text} poem={poem}>
          Poem {index + 1}
        </Text>
      </TouchableOpacity>
    );
  });

  return addPoem ? (
    <PoemEdit goBack={goBackFunc} poem={poems[addPoem - 1]} />
  ) : (
    <ScrollView>
      <View style={styles.profile}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.row}>
          {poems.length < 3 ? (
            <TouchableOpacity
              style={styles.poemContainer}
              onPress={() => setAddPoem(-1)}
            >
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {boxes}
        </View>
        <View>
          <Text>Pen Name: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setPenName}
              value={penName}
            />
          </View>
        </View>
        <View>
          <Text>First Name: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setFirstName}
              value={firstName}
            />
          </View>
        </View>
        <View>
          <Text>Last Name: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setLastName}
              value={lastName}
            />
          </View>
        </View>
        <View>
          <Text>Birthday: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setBirthday}
              value={birthday}
            />
          </View>
        </View>
        <View>
          <Text>Bio: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setBio}
              value={bio}
            />
          </View>
        </View>
        <View>
          <Text>Location: </Text>
          <View style={styles.textBox}>
            <TextInput
              editable
              style={styles.input}
              onChangeText={setLocation}
              value={location}
            />
          </View>
        </View>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: height,
    width: width,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 2, // the number of columns you want to divide the screen into
    marginHorizontal: "auto",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10,
  },
  poemContainer: {
    backgroundColor: "#C3C8D3",
    minWidth: width / 4,
    minHeight: width / 4,
    maxHeight: width / 4,
    maxWidth: width / 4,
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#46BCEC",
  },
  textBox: {
    backgroundColor: "#C3C8D3",
    width: width - 40,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    justifyContent: "center",
  },
  button: {
    color: "black",
    backgroundColor: "#46BCEC",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
});

export default Profile;
