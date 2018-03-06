import React, {Component} from 'react';
import {
  StyleSheet, AppRegistry
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import ScarletScreen from './components/ScarletScreen';
import GrayScreen from './components/GrayScreen';



export default class App extends Component {
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene
            key="scarlet"
            component={ScarletScreen}
            title="Scarlet"
          />
          <Scene
            key="gray"
            component={GrayScreen}
            title="Gray"
          />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('helloWorld', () => App);
