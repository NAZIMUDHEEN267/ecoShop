import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { colors } from '../constants';
import { Image } from 'react-native-elements';
import { typography } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class ProductDetails extends Component {
  render() {
    return (
        <View style={[tw`w-full h-50 bg-white p-1 mt-2`, { elevation: 5 }]}>
            <Text style={tw`self-end bg-gray-200 w-20`}>02-03-2023</Text>
            <View style={tw`flex-row`}>
                <Image source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }} resizeMode={"contain"} style={tw`w-13 h-13`} />
                <View style={tw`ml-3 justify-evenly`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`${typography.smText}`}>Quantity: </Text>
                        <Text style={tw`${typography.smText} text-green-600`}>3</Text>
                    </View>
                    <View style={tw`${typography.smText} flex-row`}>
                        <Text style={[tw`${typography.mdSmText} font-normal`, { color: colors.TEXT_LIGHT }]}>Total Amount: </Text>
                        <Text style={tw`${typography.mdSmText} text-black`}>$112</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: colors.PRIMARY_LIGHT, marginTop: 8, paddingLeft: 12, padding: 7 }}>
                <View style={tw`flex-row`}>
                    <Text>Order No: </Text>
                    <Text style={tw`${typography.smText} text-black`}>293823829</Text>
                </View>
                <View style={tw`flex-row`}>
                    <Text style={tw`underline`}>Tracking No: </Text>
                    <Text style={tw`${typography.smText} text-black`}>IWsa93is72p94783</Text>
                </View>
            </View>

            <View style={tw`flex-row items-center h-15 justify-around`}>
                <TouchableOpacity style={tw`border-2 border-green-500 p-1 pl-3 pr-3 rounded`}>
                    <Text style={{ color: colors.PRIMARY_COLOR }}>Details</Text>
                </TouchableOpacity>

                <Text style={[tw`${typography.smText}`, {color: this.props.text[0] === "D" ? colors.PRIMARY_COLOR : colors.RED_COLOR }]}>{this.props.text}</Text>
            </View>
        </View>
    )
  }
}

export default ProductDetails