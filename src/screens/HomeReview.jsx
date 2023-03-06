import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import { typography } from '../theme';
import { colors, navigation, spaces } from '../constants';
import { TextInput } from 'react-native-gesture-handler';
import { color } from '@rneui/base';
export class HomeReview extends Component {
  render() {
    return (
      <View style={tw`flex-1 bg-gray-100 ${spaces['p-normal']}`}>
        <View style={[tw`p-2 rounded w-full justify-between flex-row bg-black`]}>
            <Image
              className="w-3/5 mb-1 h-28"
              source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
              resizeMode={"contain"}
            />
         <View className="w-2/5 items-center justify-center">
            {/* stars */}
            <View style={tw`mt-1 mb-1 flex-row items-center justify-center`}>
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
            </View>

            <Text style={tw`${typography.smText} text-center text-white`}>Jamaican Fruits</Text>

            {/* price */}
            <View style={tw`flex-row justify-evenly mb-1`}>
              <Text style={[tw`${typography.smText} text-gray-300`, { textDecorationLine: "line-through", textDecorationStyle: "solid" }]}>$345</Text>
              <Text style={tw`${typography.mdSmText} text-red-500 ml-5`}>$76</Text>
            </View>
         </View>
        </View>

        <Text style={tw`${typography.mdSmText} text-center mt-5 mb-5 text-black`}>Rating Your Products</Text>
        <Text style={tw`text-gray-400 text-center  mb-5`}>What is your rate?</Text>
        <View style={tw`mt-1 mb-1 flex-row items-center justify-center`}>
          <Entypo name='star' size={45} color={colors.TEXT_LIGHT} />
          <Entypo name='star' size={45} color={colors.TEXT_LIGHT} />
          <Entypo name='star' size={45} color={colors.TEXT_LIGHT} />
          <Entypo name='star' size={45} color={colors.TEXT_LIGHT} />
          <Entypo name='star' size={45} color={colors.TEXT_LIGHT} />
        </View>

        <Text style={tw`mt-5 text-black ${typography.smText}`}>Please Write Services Quality</Text>
        <TextInput 
          numberOfLines={10}
          style={[tw`bg-white w-full mt-3`, {elevation: 10}]}
          focusable
        />

        <TouchableOpacity style={[tw`mt-5 h-13 w-full justify-center rounded`, {backgroundColor: colors.PRIMARY_COLOR}]}>
          <Text style={tw`${typography.smText} text-center text-white`}>Submit Feedback</Text>
        </TouchableOpacity>
        <Text style={[tw`mt-2 text-center text-gray-400`, {textDecorationLine: "underline"}]}
        onPress={() => this.props.navigation.navigate(navigation.PRODUCT)}
        >Not now</Text>
      </View>
    )
  }
}

export default HomeReview