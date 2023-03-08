import { Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { Icon } from '@rneui/themed';
import { colors, navigation } from '../constants';
import { typography } from '../theme';

export class EditAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      street: "",
      city: "",
      houseNo: "",
      state: "",
      zip: "",
      phoneNo: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='height' style={tw`flex-1  p-3`}>

        <TextInput onChangeText={(val) => this.setState({ ...this.state, name: val })} value={this.state.name} placeholder='Name' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, street: val })} value={this.state.street} placeholder='Street Address' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, city: val })} value={this.state.city} placeholder='City/Town' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />
        <TextInput onChangeText={(val) => this.setState({ ...this.state, houseNo: val })} value={this.state.houseNo} placeholder='House no' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />
        <View style={tw`flex-row justify-evenly`}>
          <SelectDropdown
            defaultButtonText='State'
            buttonStyle={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-green-300 mb-3`}
            buttonTextStyle={tw`text-base`}
            data={["Kerala", "Karnataka", "Tamilnadu", "Andra", "Telangana"]}
            renderDropdownIcon={() => (
              <Icon name='keyboard-arrow-down' type='materialicons' />
            )}
            onSelect={(selectedItem, index) => {
              this.setState({ ...this.state, state: selectedItem })
            }}
          />
          <TextInput
            placeholder={"Zip Code"}
            onChangeText={(text) => this.setState({ ...this.state, zip: text })}
            style={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-green-300 mb-3 pl-2`}
          />
        </View>
        <TextInput onChangeText={(val) => this.setState({ ...this.state, phoneNo: val })} value={this.state.phoneNo} placeholder='Phone no' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.PROFILE_SCREEN)} style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
          <Text style={tw`${typography.smText} text-center text-white`}>Update Address</Text>
        </TouchableOpacity>
        <Text style={[tw`mt-2 text-center text-gray-400`, { textDecorationLine: "underline" }]}
          onPress={() => this.props.navigation.navigate(navigation.PROFILE_SCREEN)}
        >Not now</Text>
      </KeyboardAvoidingView>
    )
  }
}

export default EditAddress