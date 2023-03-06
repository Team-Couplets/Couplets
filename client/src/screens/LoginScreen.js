import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

//This is setup fpr login screen;
const LoginScreen = () => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView>
          <TextInput>Login Screen</TextInput>
          <TextInput
            // style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
          />
          <TextInput
            // style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            // keyboardType="numeric"
          />

          <button></button>
        </SafeAreaView>
      );
    };


export default LoginScreen;

