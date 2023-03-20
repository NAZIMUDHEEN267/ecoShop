import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import tw from "twrnc";
import { colors, navigation } from '../constants';
import { typography } from '../theme';
import { Image } from 'react-native-elements';
import { addItemToCart } from '../utils/addCart';

export class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.nav = this.props?.nav.navigate;
        this.discount = (this.props?.item.discountPercentage / this.props?.item.price) * 100
    }

    render() {
        if (this.props?.item) {
            return (
                <TouchableOpacity onPress={() => this.nav(navigation.PRODUCT, this.props.item)} style={[tw`bg-white p-2 m-1-2 rounded w-${this.props.width} justify-between`]}>
                    <Image
                        className="w-full mb-1 h-28"
                        source={{ uri: this.props.item.images[0] }}
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
                    <Text style={tw`${typography.smText} text-center`}>{this.props.item.title.substring(0, 15)}...</Text>

                    {/* price */}
                    <View style={tw`flex-row justify-evenly mb-1`}>
                        <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>₹{this.props.item.price * 50}</Text>
                        <Text style={tw`${typography.smText} text-red-500`}>₹{(this.props.item.price * 50) - Math.floor(this.discount)}</Text>
                    </View>
                    <TouchableOpacity style={[tw`mt-2 p-2 rounded`, { backgroundColor: colors.PRIMARY_LIGHT }]} onPress={() => this.props.dispatch(this.props.item)}>
                        <Text style={tw`text-center`}>+ Add to cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            )
        } else {
            return <Text>helloooo</Text>
        }
    }
}

export default ProductItem