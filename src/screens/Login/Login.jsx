import { Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import { colors, navigation } from '../../constants';
import { typography } from '../../theme';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/slices/data';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      passwd: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={tw`flex-1`} behavior={"height"}>
        <View style={tw`flex-1 p-3 justify-center`}>

          <Text style={tw`${typography.bgText} text-center mb-4 underline`}>Login</Text>

          <TextInput onChangeText={(val) => this.setState({ ...this.state, name: val })} value={this.state.name} placeholder='Name' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
          <TextInput onChangeText={(val) => this.setState({ ...this.state, passwd: val })} secureTextEntry value={this.state.passwd} placeholder='Password' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />

          <TouchableOpacity onPress={ async () => {
            if(await this.props.setLogData(this.state)) {
                this.props.navigation.navigate(navigation.INTRO)
            } else {
              console.log("username not found")
            }
          }} style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
            <Text style={tw`${typography.smText} text-center text-white`}>Login</Text>
          </TouchableOpacity>

          <View style={tw`mt-2 flex-row justify-center`}>
            <Text>Create new account</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.SIGN_UP)}>
              <Text style={tw`ml-2 ${typography.smText} text-blue-400`}>Sign</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);