import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Header } from "@rneui/themed";
import { Image, SearchBar } from 'react-native-elements';
import tw from "twrnc";
import Carousel from 'react-native-reanimated-carousel';
import { colors, spaces } from '../constants';
import { typography } from '../theme';
import { ScrollView } from 'react-native-gesture-handler';

export class Home extends Component {
  render() {
    return (
      <ScrollView style={tw`bg-white`}>
        <Header
          containerStyle={tw`h-2/6 flex-col rounded-bl-3xl rounded-br-3xl`}
          leftContainerStyle={[tw`flex-col bg-yellow-200`, { width: 500 }]}
          backgroundColor={colors.PRIMARY_COLOR}
          barStyle={'light-content'}
          leftComponent={() => (
            <View>
              <Text style={tw`${typography.bgText}`}>Eco Shop</Text>
            </View>
          )}
          centerComponent={() => (
            <SearchBar
              placeholder='Search Products'
              placeholderTextColor={colors.TEXT_BG_COLOR}
              inputStyle={tw`bg-white`}
              containerStyle={tw`bg-white rounded-xl`}
              inputContainerStyle={tw`bg-white`}
            />
          )}
        />

        {/* main body */}
        <View style={tw`${spaces['p-normal']}`}>
          {/* category */}
          <View>
            <View style={tw`flex-row justify-between`}>
              <Text style={[tw`${typography.smText}`, {color: colors.BOX_BLACK}]}>My market category</Text>
              <Text style={[tw`${typography.smText}`, { color: colors.TEXT_LIGHT }]}>See all</Text>
            </View>
            <View style={tw`flex-row justify-around mt-2 mb-2`}>
              <View style={[tw`w-1/5 h-24 p-3 items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                <TouchableOpacity activeOpacity={.7}>
                  <Image
                    className="w-10 h-14 mb-1"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                  />
                  <Text>Fruits</Text>
                </TouchableOpacity>
              </View>
              <View style={[tw`w-1/5 h-24 p-3 items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                <TouchableOpacity activeOpacity={.7}>
                  <Image
                    className="w-10 h-14 mb-1"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                  />
                  <Text>Veg</Text>
                </TouchableOpacity>
              </View>
              <View style={[tw`w-1/5 h-24 p-3 items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                <TouchableOpacity activeOpacity={.7}>
                  <Image
                    className="w-10 h-14 mb-1"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                  />
                  <Text>Meat</Text>
                </TouchableOpacity>
              </View>
              <View style={[tw`w-1/5 h-24 p-3 items-center justify-center`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                <TouchableOpacity activeOpacity={.7}>
                  <Image
                    className="w-10 h-14 mb-1"
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    resizeMode={"contain"}
                  />
                  <Text>Juice</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* carousel */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Carousel
              loop
              width={spaces.width - 40}
              height={150}
              autoPlay={true}
              autoPlayInterval={2000}
              data={[...new Array(6).keys()]}
              scrollAnimationDuration={2000}
              onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={({ index }) => (
                <View
                  style={[{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }, tw`bg-gray-200 ml-2`]}
                >
                  <View style={tw`p-1 items-center h-full mt-2 w-1/2 `}>
                    <Text style={[{color: colors.PRIMARY_TEXT, textAlign: "left"}]}>Fresh grocery</Text>
                    <Text style={tw`${typography.smText}`}>There you can Buy your all of grocery</Text>
                    <Text style={tw`mt-3 bg-yellow-300 p-2 rounded ${typography.smText}`}>Shop now ></Text>
                  </View>
                  <Image
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                    style={[tw`h-full`, {width: spaces.width / 2.5}]}
                    resizeMode={"cover"}
                  />
                </View>
              )}
            />
          </View>

          {/* popular */}
          <View>
            <View>
              <Image
                className="w-10 h-14 mb-1"
                source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/60/51/fruits-and-vegetables-group-cartoon-vector-1356051.jpg" }}
                resizeMode={"contain"}
              />
              {/* stars */}
              <View>

              </View>
              {/* price */}
              <View>
                <Text></Text>
                <Text></Text>
                <TouchableOpacity style={[tw``, {backgroundColor: colors.PRIMARY_LIGHT}]}>
                  <Text>+ Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Home