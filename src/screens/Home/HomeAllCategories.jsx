import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { typography } from '../theme';
import { colors, spaces } from '../../constants';

export class HomeAllCategories extends Component {
  render() {
    return (
      <View style={tw`flex-1 ${spaces['p-normal']}`}>
        <View style={tw`flex-row mt-2 mb-2 flex-wrap`}>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/1/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Smart Phones</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/6/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Laptops</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/13/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Fragrances</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/18/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Skincare</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/23/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Groceries</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.3} style={[tw`w-.8/2 h-30 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
            <Image
              className="w-full h-14 mb-1"
              source={{ uri: "https://i.dummyjson.com/data/products/28/4.jpg" }}
              resizeMode={"contain"}
            />
            <Text style={tw`text-center`}>Home Decoration</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomeAllCategories