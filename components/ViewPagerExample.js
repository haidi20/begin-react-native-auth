import React, {Component} from 'react';
import {
  View,Text,
  ScrollView,
  StyleSheet,
  ViewPagerAndroid
} from 'react-native';

export default class ViewPagerExample extends Component{
  render(){
    return(
      <ViewPagerAndroid style={{
        flex: 1
      }}
        initialPage={0}
        onPageScroll={(event) => {
          console.log(`offset = ${event.nativeEvent.offset}`);
        }}
      >
        <View style={{backgroundColor:'lightseagreen'}}>
          <Text style={style.textStyle}> layar 1 </Text>
        </View>
        <View style={{backgroundColor:'palevioletred'}}>
          <Text style={style.textStyle}> layar 2 </Text>
        </View>
        <View style={{backgroundColor:'salmon'}}>
          <Text style={style.textStyle}> layar 3 </Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}
const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
    textAlign: 'center'
  }
});
