import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { typography } from '../theme';
import { colors } from '../constants';
import Entypo from "react-native-vector-icons/Entypo"

export class CartItem extends Component {
    constructor(props) {
        super(props);

        this.discount = (this.props?.item.discountPercentage / this.props?.item.price) * 100
    }

    render() {
        return (
            <View style={tw`w-full h-50 bg-white rounded flex-row mt-3`}>
                <View style={tw`w-2/5 h-full`}>
                    <Image style={tw`w-full h-full`} source={{ uri: this.props.item.images[0] }} resizeMode={"contain"} />
                </View>

                <View style={tw`w-2.9/5 h-full justify-evenly pl-2`}>
                    <View>
                    <Text style={tw`${typography.smText} text-black mb-2`}>{this.props.item.title}</Text>
                        {/* stars */}
                        <View style={tw`mt-1 mb-1 flex-row items-center justify-center`}>
                            <Entypo name='star' size={15} color={"#db9004"} />
                            <Entypo name='star' size={15} color={"#db9004"} />
                            <Entypo name='star' size={15} color={"#db9004"} />
                            <Entypo name='star' size={15} color={"#db9004"} />
                            <Entypo name='star' size={15} color={"#db9004"} />
                        </View>
                    </View>


                    <View style={tw`flex-row justify-evenly mb-1`}>
                        <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>₹{this.props.item.price * 50}</Text>
                        <Text style={tw`${typography.mdSmText} text-red-500`}>₹{(this.props.item.price * 50) - Math.floor(this.discount)}</Text>
                    </View>

                    <View style={tw`flex-row justify-between px-1 w-full rounded`}>
                        <TouchableOpacity style={tw`w-20 h-7 bg-red-400 rounded items-center justify-center`}>
                            <Text style={tw`${typography.smText} text-white`}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`w-20 h-7 bg-green-500 rounded items-center justify-center`}>
                            <Text style={tw`${typography.smText} text-white`}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default CartItem