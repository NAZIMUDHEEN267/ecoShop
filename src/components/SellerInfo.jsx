import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { Avatar } from "@rneui/themed";
import tw from "twrnc";
import { spaces } from '../constants';
import { typography } from '../theme';

export class SellerInfo extends Component {
  render() {
    return (
      <View style={tw`items-center justify-center ${spaces['p-normal']} pt-10`}>
        <Avatar
          size={72}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />

        <Text style={tw`${typography.mdText} mt-2`}>Steve jobs</Text>
        <Text>
          He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.
        </Text>
      </View>
    )
  }
}

export default SellerInfo