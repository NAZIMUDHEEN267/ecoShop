import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Intro from './src/screens/Intro'
import IntroProduct from './src/screens/IntroProduct'

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Intro /> */}
        <IntroProduct />
      </View>
    )
  }
}

export default App