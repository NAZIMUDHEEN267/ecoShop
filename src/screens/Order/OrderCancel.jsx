import { View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import ProductDetails from '../../components/ProductDetails';
import { spaces } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

export class OrderCancel extends Component {
  render() {
    return (
      <View style={tw`flex-1 ${spaces['p-normal']} pt-0`}>
        <ScrollView>
          <ProductDetails text={"Canceled"}/>
        </ScrollView>
      </View>
    )
  }
}

export default OrderCancel