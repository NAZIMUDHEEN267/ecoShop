import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import { typography } from '../theme';
import { colors, navigation, spaces } from '../constants';
import { TextInput } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating-widget';
export class HomeReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      message: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='height' style={tw`flex-1`}>
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

          <StarRating
            rating={this.state.rating}
            onChange={(value) => this.setState({ rating: value })}
            starSize={42}
            style={{ alignSelf: "center" }}
            emptyColor={colors.TEXT_LIGHT}
            color={colors.START_YELLOW}
          />

          <Text style={tw`mt-5 text-black ${typography.smText}`}>Please Write Services Quality</Text>
          <TextInput
            numberOfLines={10}
            style={[tw`bg-white w-full mt-3 p-3`, { elevation: 10 }]}
            multiline
            value={this.state.message}
            onChangeText={(text) => this.setState({ ...this.state, message: text })}
            textAlignVertical='top'
            textAlign='left'
          />

          <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.PRODUCT)} style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
            <Text style={tw`${typography.smText} text-center text-white`}>Submit Feedback</Text>
          </TouchableOpacity>
          <Text style={[tw`mt-2 text-center text-gray-400`, { textDecorationLine: "underline" }]}
            onPress={() => this.props.navigation.navigate(navigation.PRODUCT)}
          >Not now</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default HomeReview