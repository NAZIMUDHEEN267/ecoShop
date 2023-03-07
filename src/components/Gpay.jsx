import { TextInput, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";

export class Gpay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upi: "",
      phone: ""
    }
  }

  render() {
    return (
      <View style={tw`mt-5`}>
        <TextInput onChangeText={(val) => this.setState({ ...this.state, upi: val })} value={this.state.upi} placeholder='Enter UPI' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, phone: val })} value={this.state.phone} placeholder='Phone Number' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
      </View>
    )
  }
}

export default Gpay