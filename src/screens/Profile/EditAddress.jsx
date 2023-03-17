import { Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { Icon } from '@rneui/themed';
import { colors, navigation } from '../../constants';
import { typography } from '../../theme';
import realm from '../../config/schema';

export class EditAddress extends Component {

  constructor(props) {
    super(props);

    const username = this.props.route.params.username;
    this.details = realm.objects("Sign").filtered(`username = "${username}"`)[0];

    this.state = {
      username: this.details.username,
      street: this.details.street,
      city: this.details.city,
      houseNo: String(this.details.houseNo),
      state: this.details.state,
      zip: this.details.zip.toString(),
      phone: String(this.details.phone)
    }
  }

  updateDetails() {
    realm.write(() => {
      this.details.username = this.state.username,
        this.details.street = this.state.street,
        this.details.city = this.state.city,
        this.details.houseNo = Number(this.state.houseNo),
        this.details.state = this.state.state,
        this.details.zip = Number(this.state.zip),
        this.details.phone = Number(this.state.phone)
    })

    console.log(this.details);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='height' style={tw`flex-1  p-3`}>

        <TextInput onChangeText={(val) => this.setState({ ...this.state, username: val })} value={this.state.username} placeholder='Name' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />
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
            value={this.state.zip}
            onChangeText={(text) => this.setState({ ...this.state, zip: text })}
            style={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-green-300 mb-3 pl-2`}
          />
        </View>
        <TextInput onChangeText={(val) => this.setState({ ...this.state, phone: val })} value={this.state.phone} placeholder='Phone no' style={tw`h-15 border-2 border-green-300 rounded pl-2 mb-2`} />

        <TouchableOpacity onPress={() => {
          this.updateDetails();
          this.props.navigation.navigate(navigation.PROFILE_SCREEN);
        }} style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
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