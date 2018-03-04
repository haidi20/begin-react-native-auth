import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import LoginComponent from './components/LoginComponent';



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
