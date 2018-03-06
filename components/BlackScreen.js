import React, {Component} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native' ;
import {Actions} from 'react-native-router-flux';

export default class BlackScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.blue()}
        >
          Black Screen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems :'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  }
});
