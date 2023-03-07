import { Text, View } from 'react-native';
import React, { Component } from 'react';
import tw from "twrnc";
import { colors, spaces } from '../constants';
import { Icon, Image } from 'react-native-elements';
import { typography } from '../theme';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetails from '../components/ProductDetails';

export class OrderDeliver extends Component {
  render() {
    return (
      <View style={tw`flex-1 ${spaces['p-normal']} pt-0`}>
        {/* <View style={[tw`rounded-full items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT, height: spaces.heightHalf / 2, width: spaces.heightHalf / 2 }]}>
          <Icon name='remove-shopping-cart' type='materialicons' size={76} color={colors.PRIMARY_COLOR} />
        </View>
        <Text style={tw`mt-2 ${typography.mdSmText}`}>No Order Yet!</Text>
        <Text style={{ color: colors.TEXT_LIGHT }}>The cart is empty, click here to shop</Text>
        <TouchableOpacity activeOpacity={.7} style={[tw`w-45 p-3 bg-yellow-200 mt-4`, {backgroundColor: colors.PRIMARY_COLOR}]}>
          <Text style={tw`${typography.smText} text-white text-center`}>Go to Shop</Text>
        </TouchableOpacity> */}
        <ScrollView>
          <ProductDetails text={"Delivered"}/>
        </ScrollView>
      </View>
    )
  }
}

export default OrderDeliver