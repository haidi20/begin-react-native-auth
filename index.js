import React, {Component} from 'react';
import {
  StyleSheet, AppRegistry, Text
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import ScarletScreen from './components/ScarletScreen';
import GrayScreen from './components/GrayScreen';

import BlueScreen from './components/BlueScreen';
import BlackScreen from './components/BlackScreen';

const TabIcon = ({selected, title}) => {
  return(
    <Text style={{color: selected ? 'red' :'blue'}}>{title}</Text>
  )
}

export default class App extends Component {
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor:'#ffffff'}}
          >
            <Scene key="osu" title="OSU" icon={TabIcon}>
              <Scene
                key="scarlet"
                component={ScarletScreen}
                title="Scarlet"
                initial
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>
            <Scene key="um" title="UM" icon={TabIcon}>
              <Scene
                key="blue"
                component={BlueScreen}
                title="blue"
              />
              <Scene
                key="black"
                component={BlackScreen}
                title="black"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('helloWorld', () => App);
