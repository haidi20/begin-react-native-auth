import React, { Component } from 'react';
import { Text } from 'react-native';

export default class SelamatDatang extends Component<Props> {
  render(){
    let tulisan = `

    Helo world, my name is haidi` ;
    return (
      <Text>
        { tulisan }
      </Text>
    );
  }
}
