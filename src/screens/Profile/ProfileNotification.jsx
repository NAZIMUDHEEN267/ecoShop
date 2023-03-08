import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Icon } from 'react-native-elements';
import { spaces, colors, navigation } from '../../constants';
import { typography } from '../../theme';
import { CommonActions } from '@react-navigation/native';


export class ProfileNotification extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={tw`flex-1 items-center justify-center ${spaces['p-normal']} pt-0`}>
        <View style={[tw`rounded-full items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT, height: spaces.heightHalf / 2, width: spaces.heightHalf / 2 }]}>
          <Icon name='bell-off' type='feather' size={76} color={colors.PRIMARY_COLOR} />
        </View>
        <Text style={tw`mt-2 ${typography.mdSmText}`}>No Notification Yet!</Text>
        <Text style={{ color: colors.TEXT_LIGHT }}>Product or other related notifications are not available</Text>
        <TouchableOpacity
          // onPress={this.props.navigation.goBack}
          activeOpacity={.7}
          style={[tw`w-45 p-3 bg-yellow-200 mt-4`, { backgroundColor: colors.PRIMARY_COLOR }]}>
          <Text style={tw`${typography.smText} text-white text-center`}>Go to Shop</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ProfileNotification