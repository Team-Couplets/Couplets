import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button} from "react-native";

//This is the setup for sign up screen
const RegisterScreen = () => {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');

  return(
    <SafeAreaView>
      <ScrollView>
        <Text>Register Screen</Text>
        <TextInput style={styles.inputBox} label = "firstName" value={firstName} onChangeText={onChangeFirstName} placeholder="First Name"/>
        <TextInput style={styles.inputBox} label = "lastName" value={lastName} onChangeText={onChangeLastName} placeholder="Last Name"/>
        <TextInput style={styles.inputBox} label = "email" keyboardType='email-address' placeholder="Email"/>
        <TextInput style={styles.inputBox} label = "password" secureTextEntry={true} placeholder="Password"/>
        <TextInput style={styles.inputBox} label = "confirmPassword" secureTextEntry={true} placeholder="Confirm Password"/>
        <TextInput style={styles.inputBox} label = "phoneNumber" keyboardType='phone-pad' placeholder="Phone Number"/>
        <Button onPress={() => Alert.alert('Register button pressed')}
            style={styles.registerBtn}
            title="REGISTER"></Button>
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

export default RegisterScreen;