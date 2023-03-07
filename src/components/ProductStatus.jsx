import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc"
import { typography } from '../theme'
import { Image } from 'react-native-elements';

export class ProductStatus extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {
        return (
            <View style={[tw`bg-white p-4 mt-2 mb-2`, { elevation: 10 }]}>
                <View style={tw`mb-8 flex-row items-center`}>
                    <Image resizeMode='contain' style={{ width: 70, height: 70 }} source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }} />
                    <Text style={tw`${typography.mdSmText} text-black ml-3`}>Arriving tomorrow</Text>
                </View>
                {
                    Object.keys(this.props.status)
                        .map((status, i) => {

                            const checkValue = this.props.status[status];

                            if (status === "Delivered") {
                                return (
                                    <View style={tw`flex-row`} key={i}>
                                        <View style={tw`w-10 items-center justify-center`}>
                                            <View style={tw`w-6 h-6 rounded-full ${checkValue ? "bg-green-700" : "bg-gray-400"}`} />
                                        </View>
                                        <Text style={tw`self-end ${typography.smText} ml-2 text-black`}>{status}</Text>
                                    </View>
                                )
                            }

                            return (
                                <View style={tw`flex-row`} key={i}>
                                    <View style={tw`w-10 items-center justify-center`}>
                                        <View style={tw`w-2 h-10 -mb-1 ${checkValue ? "bg-green-700" : "bg-gray-400"} -mt-0`} />
                                        <View style={tw`w-6 h-6 ${checkValue ? "bg-green-700" : "bg-gray-400"} rounded-full`} />
                                    </View>
                                    <Text style={tw`self-end ${typography.smText} ml-2 text-black`}>{status}</Text>
                                </View>
                            )
                        })
                }
            </View>
        )
    }
}

export default ProductStatus