import React, {Component} from 'react';
import {
  FlatList, StyleSheet, Text, View, Image, Alert,
  Platform, TouchableHightLight,Dimensions,
  TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
  constructor(props){
    super(props);
  }
  showAddModal=()=>{
    this.refs.myModal.open();
  }
  render(){
    return(
      <Modal style={{
          justifyContent: 'center',
          borderRadius: Platform.os === 'android' ? 30 : 0,
          shawdowRadius: 10,
          width: screen.width - 80,
          height: 280
        }}
        ref={'myModal'}
        position='center'
        backdrop={true}
        onClosed={() => {
          alert('Modal Closed');
        }}
      >
        <Text>New food's information</Text>
      </Modal>
    )
  }
}
