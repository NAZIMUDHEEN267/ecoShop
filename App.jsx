import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Intro from './src/screens/Intro'

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Intro />
      </View>
    )
  }
}

export default App