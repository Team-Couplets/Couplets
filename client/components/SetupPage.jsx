import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, Alert} from "react-native";

//This is the setup for sign up screen
export default function SetupPage () {
    const [penName, onChangePenName] = React.useState('');
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [location, onChangeLocation] = React.useState('');
    const [bio, onChangeBio] = React.useState('');

    const submitForm = async () => {
      const formBody = {
        penName: penName,
        firstName: firstName,
        lastName: lastName,
        location: location,
        bio: bio
      }
      console.log('formBody', formBody);
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
        console.log(response)
        if(response === 'success') {
          penName = '';
          firstName = '';
          lastName = '';
          location = '';
          bio = '';
        }
      })
    }

  return(
    <SafeAreaView>
      <ScrollView>   
        <Text>Setup Screen</Text>
        <TextInput style={styles.inputBox} label = "penName" value={penName} onChangeText={onChangePenName} placeholder="Pen Name"/>
        <TextInput style={styles.inputBox} label = "firstName" value={firstName} onChangeText={onChangeFirstName} placeholder="First Name"/>
        <TextInput style={styles.inputBox} label = "lastName" value={lastName} onChangeText={onChangeLastName} placeholder="Last Name"/>
        <TextInput style={styles.inputBox} lable = "location" value={location} onChangeText={onChangeLocation} placeholder="location" maxLength={30}/>
        <TextInput style={styles.largeTextBox} lable = "bioText" value={bio} onChangeText={onChangeBio} placeholder="Bio" maxLength={255} multiline = {true}/>

        <Button type="Sumbit" onPress={submitForm}
            style={styles.setupBtn}
            title="LOOKS GOOD, SAVE!"></Button>
        
      </ScrollView>
  </SafeAreaView>
    
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
  }
});
