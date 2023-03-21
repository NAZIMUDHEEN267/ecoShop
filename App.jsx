import React, { Component } from 'react'
import MainNavigator from './src/navigations'
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()
export class App extends Component {
  render() {
    return <MainNavigator />
  }
}

export default App