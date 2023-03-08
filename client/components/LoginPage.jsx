import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, Text, Button, Alert, Linking} from 'react-native';

//This is setup fpr login screen; the state has not been used yet;
const LoginPage = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView style={styles.loginBox}>
          <Text>User Login</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
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
        width: 280,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "#ededed",
        padding: 10
      },
      loginBtn: {
        color:"#841584"
      },
      loginBox:{
        flex:1,
        alignItems: "center"
      }
    });


export default LoginPage;

