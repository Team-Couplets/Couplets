import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as AppleAuthentication from 'expo-apple-authentication';
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';
import Main from "./components/Main";

export default function App() {
  //state to check user's device supports apple oauth
  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
  //state to save userToken
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    //function to check if user's device supports apple oauth
    const checkAvailable = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setAppleAuthAvailable(isAvailable);

      if (isAvailable) {
        //grab the exisiting jwtToken if exists
        const credentialJson = await SecureStore.getItemAsync('apple-credentials');
        //set the user token to the jwtToken
        setUserToken(JSON.parse(credentialJson));
      }
    }
    checkAvailable();
  }, [])

  //authenication thorugh apple
  const getAppleAuthContent = () => {
    //if no userToken in state show the button
    if (!userToken) {
      //built in styling for apple button
      return <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={login}
      />;
    }
    else {
      //if token exists decode the identity token
      const decoded = jwtDecode(userToken.identityToken);
      const current = Date.now() / 1000;
      return (
        <View>
          <Button title="Logout" onPress={logout} />
          <Main />
        </View>
      )
    }
  }

  //login function
  const login = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // console.log(credential)
      // const data = await fetch('http://localhost:3000/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(credential),
      // })
      //set the userToken state to jwttoken
      setUserToken(credential);
      //saves the jwttoken to the secure store
      SecureStore.setItemAsync('apple-credentials', JSON.stringify(credential))
    }
    catch (error) {
      console.log('Error with login:' + error);
    }
  }

  //logout function
  const logout = async () => {
    SecureStore.deleteItemAsync('apple-credentials');
    setUserToken(null);
  }

  //rendering the app based on authenication
  return (
    <View style={styles.container}>
      {
        appleAuthAvailable 
        ? getAppleAuthContent()
        : <Text>Apple auth unavailable</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 240,
    height: 57
  }
});
