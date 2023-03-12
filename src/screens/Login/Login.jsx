import { Text, TouchableOpacity, View, KeyboardAvoidingView, Alert } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import { colors, navigation } from '../../constants';
import { typography } from '../../theme';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/slices/userData';
import checkUser from '../../config/checkUser';

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

          <TextInput onChangeText={(val) => this.setState({ ...this.state, username: val })} value={this.state.name} placeholder='Name' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
          <TextInput onChangeText={(val) => this.setState({ ...this.state, passwd: val })} secureTextEntry value={this.state.passwd} placeholder='Password' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />

          <TouchableOpacity onPress={async () => {
            const status = await checkUser("login", this.state);

            if (!status) {
              Alert.alert("login failed", "username or password error");
            } else {
              this.props.navigation.navigate(navigation.INTRO);
            }
          }}
            style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
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