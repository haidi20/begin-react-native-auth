import React, {Component} from 'react';
import {Text, View} from 'react-native';
class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {
      showText : true
    };
    var taskToDo = () => {
      this.setState(state => {
        return {
          showText : !state.showText
        }
      });
    };
    const timeToBlink = 500 ;
    setInterval(taskToDo,timeToBlink);
  }
  render(){
    let textToDisplay = this.state.showText ? this.props.inputText : ' ';
    return(
      <Text>{textToDisplay}</Text>
    );
  }
}
export default class TextBlink extends Component{
  render(){
    return(
      <View>
        <Blink inputText='Hello, bagaimana kabarmu ?'> </Blink>
        <Blink inputText='baik baik saja'> </Blink>
      </View>
    );
  }
}
