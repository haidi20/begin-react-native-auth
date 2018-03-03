import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import LoginComponent from './components/LoginComponent';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCxWf7K5qvSN_4YxPsJNM0eGAulPcfDCBk",
  databaseURL: "https://reactnativefirebasetutor-5e296.firebaseio.com",
  storageBucket: "reactnativefirebasetutor-5e296.appspot.com"
}
firebase.initializeApp(config);

export default class App extends Component {
  render(){
    return(
      <View>
        <Text>coba ahayde</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('helloWorld', () => LoginComponent);
