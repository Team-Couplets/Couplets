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

function Profile(props) {
  const [poems, setPoems] = useState([]);
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

  useEffect(() => {
    const getPoems = async () => {
      const response = await fetch(
        `http://localhost:3000/api/user/poems?email=${props.email}`
      );
      const data = await response.json();

      const cache = [];
      for (let key in data[0]) {
        if (data[0][key].length > 0) cache.push(data[0][key]);
      }
      setPoems(cache);
    };
    getPoems();
  }, [poems]);

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
        poems={poems}
        onPress={() => setAddPoem(index + 1)}
      >
        <Text style={styles.text} poem={poem}>
          Poem {index + 1}
        </Text>
      </TouchableOpacity>
    );
  });

  return addPoem ? (
    <PoemEdit
      goBack={goBackFunc}
      poem={poems[addPoem - 1]}
      poems={poems}
      email={props.email}
      index={addPoem}
    />
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
          <Text style={styles.input}>Pen Name: </Text>
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
          <Text style={styles.input}>First Name: </Text>
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
          <Text style={styles.input}>Last Name: </Text>
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
          <Text style={styles.input}>Birthday: </Text>
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
          <Text style={styles.input}>Bio: </Text>
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
          <Text style={styles.input}>Location: </Text>
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
    marginTop: 0 - (height * 0.05),
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10,
  },
  poemContainer: {
    backgroundColor: "#e6e8eb",
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
    backgroundColor: "#e6e8eb",
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
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
  }
});

export default Profile;
