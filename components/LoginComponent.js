import React, {Component} from 'react';
import {
  Text, View, Image, Alert,
  FlatList, StyleSheet, Platform,
  TouchableHighLight,Dimensions, TextInput
} from 'react-native';
import Button from 'react-native-button';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCxWf7K5qvSN_4YxPsJNM0eGAulPcfDCBk",
  databaseURL: "https://reactnativefirebasetutor-5e296.firebaseio.com",
  storageBucket: "reactnativefirebasetutor-5e296.appspot.com"
}
firebase.initializeApp(config);

export default class LoginComponent extends Component{
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated : false,
      typedEmail : '',
      typedPassword : '',
      user: null
    };
  }
  onAnonymousLogin = () => {
    console.ignoredYellowBox = ['Remote debugger'];
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log('berhasil login');
        this.setState({
          isAuthenticated : true
        })
      })
      .catch((error) => {
        console.log(`gagal login. error = ${error}`);
      });
  }
  render(){
    return(
      <View style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: Platform.OS === 'android' ? 30: 0,
      }}>
        <Text
          style={{
                color: 'blue',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 40,
            }}> Login with firebase </Text>
        <Button
          containerStyle={{
            padding: 10,
            borderRadius: 4,
            backgroundColor: 'rgb(226,161,184)'
          }}
          style={{fontSize: 18, color: 'white'}}
          onPress={this.onAnonymousLogin}
        > Login Anonymous </Button>
        <Text style={{margin: 20, fontSize: 15 }}>
          {this.state.isAuthenticated == true? 'login berhasil': ''}
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: 'gra',
            borderWidth: 1,
            color: 'black'
        }}
          keyboardType='email-address'
          placeholder='enter your email'
          autoCapitalize='none'
          onChangeText={
            (text) => {
              this.setState({
                typedEmail: text
              });
            }
          }
        >

        </TextInput>
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            color: 'black'
          }}
          keyboardType='default'
          placeholder='enter your password'
          secureTextEntry={true}
          onChangeText = {
            (text) => {
              this.setState({
                typedPassword : text
              })
            }
          }
        >

        </TextInput>
      </View>
    )
  }
}
