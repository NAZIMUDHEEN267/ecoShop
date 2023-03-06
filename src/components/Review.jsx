import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Avatar } from "@rneui/themed";
import { spaces, navigation } from '../constants';
import { typography } from '../theme';
import Entypo from "react-native-vector-icons/Entypo";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={tw`flex-1`}>
          <View style={tw`m-1 h-40 bg-gray-100 border-b border-gray-300 ${spaces['p-normal']}`}>
            <View style={tw`flex-row items-center`}>
              <Avatar
                size={42}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
              />
              <Text style={tw`${typography.smText} ml-2 text-black`}>Bill gates</Text>
            </View>
            {/* stars */}
            <View style={tw`mt-1 mb-1 flex-row items-center`}>
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
            </View>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur maxime ullam incidunt atque. Dolores in nesciunt iure voluptates laborum ...
            </Text>
          </View>
          <View style={tw`h-40 m-1 bg-gray-100 border-b border-gray-300 ${spaces['p-normal']}`}>
            <View style={tw`flex-row items-center`}>
              <Avatar
                size={42}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
              />
              <Text style={tw`${typography.smText} ml-2 text-black`}>Martin</Text>
            </View>
            {/* stars */}
            <View style={tw`mt-1 mb-1 flex-row items-center`}>
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
              <Entypo name='star' size={15} color={"#db9004"} />
            </View>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur maxime ullam incidunt atque. Dolores in nesciunt iure voluptates laborum ...
            </Text>
          </View>
          <TouchableOpacity style={tw`w-3/5 h-13 rounded bg-yellow-500 justify-center mt-10 self-center`} onPress={() => this.props.navigation.navigate(navigation.HOME_REVIEW)}>
            <Text style={tw`text-center ${typography.smText}`}>Add review</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Review