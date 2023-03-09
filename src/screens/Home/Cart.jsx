import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/product';
import { typography } from '../../theme';
import { colors, navigation, spaces } from '../../constants';
import { Icon } from 'react-native-elements';

export class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({data: this.props.productData.cart})
    }

    render() {
        return (
            <View style={tw`flex-1  ${spaces['p-normal']} h-full w-full items-center ${this.props.productData.cart.length > 0 && "justify-center"}`}>
                        <View style={[tw`bg-white p-2 m-1-2 h-55 w-4.9/5 rounded justify-between flex-row`]}>
                            <Image
                                className="w-2/5  mb-1 h-full"
                                source={{ uri: "" }}
                                resizeMode={"contain"}
                            />
                            <View style={tw`w-2.8/5 h-full ml-3 justify-around `}>

                                <Text style={tw`${typography.smText} text-center`}>{""}</Text>

                                {/* quantity */}
                                <View style={tw`flex-row justify-center`}>
                                    <Text style={{ color: colors.TEXT_LIGHT }}>Quantity</Text>
                                    <Text style={tw`${typography.smText} text-black ml-3 text-green-600`}>5</Text>
                                </View>

                                {/* price */}
                                <View style={tw`flex-row justify-evenly mb-1`}>
                                    <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>₹34</Text>
                                    <Text style={tw`${typography.mdSmText} text-red-500`}>₹{""}</Text>
                                </View>

                                <View style={tw`flex-row justify-between`}>
                                    <TouchableOpacity style={[tw`mt-2 p-2 rounded w-1.4/3 bg-red-500`]} onPress={() => ""}>
                                        <Text style={tw`text-center text-white ${typography.smText}`}>Remove</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[tw`mt-2 p-2 rounded w-1.4/3 bg-green-500`]}>
                                        <Text style={tw`text-center text-white ${typography.smText}`}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    {/* <>
                        <View style={[tw`rounded-full items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT, height: spaces.heightHalf / 2, width: spaces.heightHalf / 2 }]}>
                            <Icon name='remove-shopping-cart' type='materialicons' size={76} color={colors.PRIMARY_COLOR} />
                        </View>
                        <Text style={tw`mt-2 ${typography.mdSmText}`}>No Order Yet!</Text>
                        <Text style={{ color: colors.TEXT_LIGHT }}>The cart is empty, click here to shop</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.HOME)} activeOpacity={.7} style={[tw`w-45 p-3 bg-yellow-200 mt-4`, { backgroundColor: colors.PRIMARY_COLOR }]}>
                            <Text style={tw`${typography.smText} text-white text-center`}>Go to Shop</Text>
                        </TouchableOpacity>
                    </> */}
            
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);