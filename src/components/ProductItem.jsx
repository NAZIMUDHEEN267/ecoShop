import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import tw from "twrnc";
import { colors } from '../constants';
import { typography } from '../theme';
import { Image } from 'react-native-elements';

export class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
            <View style={[tw`bg-white p-2 m-1-2 rounded w-${this.props.width} justify-between`]}>
                <Image
                    className="w-full mb-1 h-28"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                />
                {/* stars */}
                <View style={tw`mt-1 mb-1 flex-row items-center justify-center`}>
                    <Entypo name='star' size={15} color={"#db9004"} />
                    <Entypo name='star' size={15} color={"#db9004"} />
                    <Entypo name='star' size={15} color={"#db9004"} />
                    <Entypo name='star' size={15} color={"#db9004"} />
                    <Entypo name='star' size={15} color={"#db9004"} />
                </View>
                {/* price */}
                <View style={tw`flex-row justify-evenly mb-1`}>
                    <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>$345</Text>
                    <Text style={tw`${typography.smText}`}>$76</Text>
                </View>
                <TouchableOpacity style={[tw`mt-2 p-2 rounded`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                    <Text style={tw`text-center`}>+ Add to cart</Text>
                </TouchableOpacity>
            </View>
    )
  }
}

export default ProductItem