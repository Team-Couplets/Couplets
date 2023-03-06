import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

//This is setup fpr login screen;
const LoginScreen = () => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView>
          <Text>Login</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
          />
          
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            // keyboardType="numeric"
          />
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
      inputBox: {
        height: 50,
        width: 300,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "#ededed",
        padding: 10
      }
    });


export default LoginScreen;

