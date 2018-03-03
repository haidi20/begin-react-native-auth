import React, { Component } from 'react';
import { Text,Image } from 'react-native';

export default class Robot extends Component{
  render(){
    const imgSource = {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/220px-HONDA_ASIMO.jpg"
    };
    return (
      // <Text> coba </Text>
      <Image source={ imgSource }
              style={ {width: 200, height: 200} }
      >
      </Image>
    );
  }
}
