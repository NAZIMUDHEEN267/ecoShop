import { TextInput, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: "",
      name: "",
      exp: "",
      cvv: ""
    }
  }

  render() {
    return (
      <View style={tw`mt-5`}>
        <TextInput onChangeText={(val) => this.setState({ ...this.state, num: val })} value={this.state.num} placeholder='Card Number' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, name: val })} value={this.state.name} placeholder='Card holder Name' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
        <View style={tw`flex-row justify-evenly`}>
          <TextInput
            placeholder={"Expiry date"}
            onChangeText={(text) => this.setState({ ...this.state, exp: text })}
            style={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-gray-300 mb-3 pl-2`}
          />    
          <TextInput
            placeholder={"CVV"}
            onChangeText={(text) => this.setState({ ...this.state, cvv: text })}
            style={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-gray-300 mb-3 pl-2`}
          />
        </View>
      </View>
    )
  }
}

export default Card