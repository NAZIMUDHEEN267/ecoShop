import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Intro from './src/screens/Intro'
import IntroProduct from './src/screens/IntroProduct'
import IntroPayment from './src/screens/IntroPayment'
import IntroDelivery from './src/screens/IntroDelivery'

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Intro /> */}
        {/* <IntroProduct /> */}
        {/* <IntroPayment /> */}
        <IntroDelivery />
      </View>
    )
  }
}

export default App