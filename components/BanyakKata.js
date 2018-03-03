import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Kata extends Component{
  render(){
    let kataString = `

      Hello ${this.props.name} . bagaimana kabarmu ?
    `;
    return(
      <Text>{ kataString }</Text>
    );
  }
}
export default class BanyakKata extends Component{
  render(){
    return (
      <View
        style= { {alignItems: 'center'} }
      >
      <Kata name="eky"></Kata>
      <Kata name="mahen"></Kata>
      </View>
    );
  }
}
