import React, {Component} from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class GrayScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.scarlet()}
        >
          Gray Screen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
})
