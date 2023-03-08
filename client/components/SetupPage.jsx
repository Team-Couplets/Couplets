import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, Alert, Image} from "react-native";
import Main from "./Main";

//This is the setup for sign up screen
export default function SetupPage () {
    const [penName, setPenName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [moveOn, setMoveOn] = React.useState(false)

    const submitForm = async () => {
      const formBody = {
        penName: penName,
        firstName: firstName,
        lastName: lastName,
        location: location,
        bio: bio
      }
      //send the form information to server at the following url
      await fetch('http://localhost:3000/api/user/setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formBody: formBody}),
      })
      .then((response) => response.json())
      .then((response) => {
        if(response) {
          setPenName('');
          setFirstName('');
          setLastName ('');
          setLocation ('');
          setBio ('');
          Alert.alert(
            'Message',
            'Profile Saved!',
            [{
              text: 'OK',
              onPress: ()=> {setMoveOn(true)},
              style: 'default',
            }]);
        }
      })
      .catch((err) => console.log(`error from the server ${err}`))
    }

    const renderLoginPage = () => {
        return (
          <SafeAreaView>
          <View>
            <Image
            style={styles.mainLogo}
            source={require("../assets/logo.png")}
          /> 
          </View>
          <View style={styles.formBox}>
            <Text>Setup Your Profile</Text>
            <TextInput style={styles.inputBox} label = "penName" value={penName} onChangeText={setPenName} placeholder="Pen Name"/>
            <TextInput style={styles.inputBox} label = "firstName" value={firstName} onChangeText={setFirstName} placeholder="First Name"/>
            <TextInput style={styles.inputBox} label = "lastName" value={lastName} onChangeText={setLastName} placeholder="Last Name"/>
            <TextInput style={styles.inputBox} lable = "location" value={location} onChangeText={setLocation} placeholder="location" maxLength={30}/>
            <TextInput style={styles.largeTextBox} lable = "bioText" value={bio} onChangeText={setBio} placeholder="Bio" maxLength={255} multiline = {true}/>
    
            <Button type="Sumbit" onPress={submitForm}
                style={styles.setupBtn}
                title="LOOKS GOOD, SAVE!"></Button>
            </View>
          </SafeAreaView>
        )
    }


  return(
    <View style={styles.container}>
      {
        moveOn? <Main /> :
      renderLoginPage()
      }
    </View>
)}

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: 280,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#ededed",
    padding: 10
  },
  largeTextBox: {
    height: 100,
    width: 280,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#ededed",
    padding: 10
  },
  mainLogo: {
    width: 350,
    resizeMode: "contain",
  },
  formBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

});
