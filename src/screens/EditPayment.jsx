import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { colors } from '../constants';
import { typography } from '../theme';
import PaymentNavigator from '../navigations/PaymentNavigator';

export class EditPayment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={tw`flex-1 p-3`}>
        {/* payment navigator */}
        {
          PaymentNavigator()
        }

        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
          <Text style={tw`${typography.smText} text-center text-white`}>Update Payment</Text>
        </TouchableOpacity>
        <Text style={[tw`mt-2 text-center text-gray-400`, { textDecorationLine: "underline" }]}
          onPress={() => this.props.navigation.goBack()}
        >Not now</Text>
      </View>
    )
  }
}

export default EditPayment