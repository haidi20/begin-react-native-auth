import React, {Component} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class BlueScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.black()}
        >
          Blue Screen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#0A2147',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
})
