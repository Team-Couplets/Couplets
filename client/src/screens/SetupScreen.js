import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, Alert} from "react-native";

//This is the setup for sign up screen
const SetupScreen = () => {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');

  return(
    <SafeAreaView>
      <ScrollView>
        <Text>Setup Screen</Text>
        <TextInput style={styles.inputBox} label = "firstName" value={firstName} onChangeText={onChangeFirstName} placeholder="First Name"/>
        <TextInput style={styles.inputBox} label = "lastName" value={lastName} onChangeText={onChangeLastName} placeholder="Last Name"/>
        
        <Button onPress={() => Alert.alert('Register button pressed')}
            style={styles.registerBtn}
            title="LOOKS GOOD!"></Button>
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
  }
});

export default SetupScreen;