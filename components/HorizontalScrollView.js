import React, {Component} from 'react';
import {
  AppRegistry,
  ScrollView,
  Text, View,
  Dimensions
} from 'react-native';

export default class HorizontalScrollView extends Component{
  render(){
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return(
      <ScrollView
        horizontal={true}
        pagingEnable={true}
        showHorizontalScrollIndikator={true}
        onMomentumScrollBegin={() => {
          alert('aktif jika di scroll');
        }}
        onMomentumScrollEnd={() => {
          alert('berakhir setelah di scroll');
        }}
      >
        <View style={{
          backgroundColor: '#5f9ea0',
          flex: 1,
          marginTop:20,
          justifyContent:'center',
          alignItems: 'center',
          width: screenWidth,

        }}>
          <Text style={{
            fontSize: 20,
            padding:15,
            color: 'white',
            textAlign:'center'
          }}>
            layar 1
          </Text>
        </View>
        <View style={{
          backgroundColor: 'tomato',
          flex: 1,
          marginTop:20,
          justifyContent:'center',
          alignItems: 'center',
          width: screenWidth,

        }}>
          <Text style={{
            fontSize: 20,
            padding:15,
            color: 'white',
            textAlign:'center'
          }}>
            layar 2
          </Text>
        </View>
        <View style={{
          backgroundColor: '#663399',
          flex: 1,
          marginTop:20,
          justifyContent:'center',
          alignItems: 'center',
          width: screenWidth,

        }}>
          <Text style={{
            fontSize: 20,
            padding:15,
            color: 'white',
            textAlign:'center'
          }}>
            layar 3
          </Text>
        </View>
      </ScrollView>
    );
  }
}
