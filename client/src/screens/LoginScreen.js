import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Button, Alert, Linking} from 'react-native';

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
            secureTextEntry={true}
          />

          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            style={styles.loginBtn}
            title="LOGIN"
            ></Button>

          <SafeAreaView> 
            <Text onPress={() => Linking.openURL('http://google.com')}> Forget your password?</Text>
          </SafeAreaView>
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
      },
      loginBtn: {
        color:"#841584"
      }
    });


export default LoginScreen;

