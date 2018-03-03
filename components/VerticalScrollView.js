import React, {Component} from 'react';
import {
  AppRegistry,
  ScrollView,
  Image, View, TextInput, Text,
  Dimensions
} from 'react-native' ;

export default class VerticalScrollView extends Component{
  render(){
    let screenWidth = Dimensions.get('window').width;
    return(
      <ScrollView
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <Image
          source={require('../images/haykyu.jpg')}
          style={{
            width:screenWidth,
            height: screenWidth * 693 / 900,
            marginTop: 20
          }}
        >
        </Image>
        <Text style={{
          backgroundColor: 'green',
          fontSize:20,
          padding:15,
          color:'white',
          textAlign:'center'
        }}>
          ini tulisan
        </Text>
        <TextInput style={{
          padding:10,
          margin:10,
          borderWidth:1
        }}
        placeholder="enter text"
        >

        </TextInput>
        <Image
          source={require('../images/haykyu.jpg')}
          style={{
            width:screenWidth,
            height: screenWidth * 693 / 900,
            marginTop: 20
          }}
        >
        </Image>
        <Image
          source={require('../images/haykyu.jpg')}
          style={{
            width:screenWidth,
            height: screenWidth * 693 / 900,
            marginTop: 20
          }}
        >
        </Image>
        <Image
          source={require('../images/haykyu.jpg')}
          style={{
            width:screenWidth,
            height: screenWidth * 693 / 900,
            marginTop: 20
          }}
        >
        </Image>
        <Image
          source={require('../images/haykyu.jpg')}
          style={{
            width:screenWidth,
            height: screenWidth * 693 / 900,
            marginTop: 20
          }}
        >
        </Image>
      </ScrollView>
    );
  }
}
