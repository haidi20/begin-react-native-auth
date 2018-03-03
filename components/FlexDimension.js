import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimension extends Component {
  render(){
    return(
      <View style={ {flex: 1,flexDirection: 'row'} }>
        <View style={ {height:200, width: 200, backgroundColor: 'mediumaquamarine'} } />
        <View style={{height:200, width: 200, backgroundColor: '#2689FA'}} />
      </View>
    );
  }
}
