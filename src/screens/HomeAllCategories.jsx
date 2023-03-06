import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { typography } from '../theme';
import { colors, spaces } from '../constants';

export class HomeAllCategories extends Component {
  render() {
    return (
      <View style={tw`flex-1 ${spaces['p-normal']}`}>
        <View style={tw`flex-row mt-2 mb-2 flex-wrap`}>
          {
            Array(15).fill(0).map((_, i) => (
              <TouchableOpacity activeOpacity={.3} key={i} style={[tw`w-1/5 h-24 p-3 items-center ml-2 mb-2 justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                  <Image
                    className="w-10 h-14 mb-1"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                  />
                  <Text style={tw`text-center`}>Fruits</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    )
  }
}

export default HomeAllCategories