import { TextInput, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";

export class Paypal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      passwd: ""
    }
  }

  render() {
    return (
      <View style={tw`mt-5`}>
        <TextInput onChangeText={(val) => this.setState({ ...this.state, email: val })} value={this.state.email} placeholder='Enter Email' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, phone: val })} value={this.state.phone} placeholder='Phone Number' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, passwd: val })} value={this.state.passwd} placeholder='Password' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
      </View>
    )
  }
}

export default Paypal