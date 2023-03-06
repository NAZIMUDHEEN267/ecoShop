import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Image } from 'react-native-elements/dist/image/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { spaces, colors } from '../constants';
import { typography } from '../theme';
import Entypo from "react-native-vector-icons/Entypo";
import { ListItem, Icon } from '@rneui/themed';
import ProductDetailsNavigator from '../navigations/ProductDetialsNavigator';

export class HomeProduct extends Component {
  constructor() {
    super();

    this.state = {
      unitExpanded: false,
      boxExpanded: false,
      textRef: {}
    }
  }

  componentDidUpdate() {
    console.log(this.state.textRef);
  }

  render() {
    return (
      <View style={tw`flex-1`}>
        <ScrollView>
          <View style={{ height: spaces.heightHalf * 2, width: spaces.width }}>
            <View style={tw`h-1.2/3 w-full`}>
              <Image
                source={{ uri: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg" }}
                style={tw`h-full w-full`}
                resizeMode={"cover"}
              />
            </View>

            <View style={tw`bg-white h-full w-full ${spaces['p-normal']}`}>
              <View style={[tw`justify-center items-center flex-row mb-4`, { marginTop: -39 }]}>
                <TouchableOpacity activeOpacity={.7} style={[tw`rounded h-24 w-24 mr-2`, { elevation: 10 }]}>
                  <Image
                    source={{ uri: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg" }}
                    style={tw`w-full h-full rounded-xl`}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={[tw`rounded h-24 w-24 mr-2`, { elevation: 14 }]}>
                  <Image
                    source={{ uri: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg" }}
                    style={tw`w-full h-full rounded-xl`}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={[tw`rounded h-24 w-24 mr-2`, { elevation: 14 }]}>
                  <Image
                    source={{ uri: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg" }}
                    style={tw`w-full h-full rounded-xl`}
                  />
                </TouchableOpacity>
              </View>

              <Text style={[tw`${typography.smText} mt-2`, { color: colors.TEXT_LIGHT }]}>{"vegetable".toLocaleUpperCase()}</Text>
              <Text style={[tw`${typography.smText}`, { color: colors.BOX_BLACK }]}>some namejalsdkfjalsfkjasldkf</Text>
              {/* stars */}
              <View style={tw`mt-1 mb-1 flex-row items-center`}>
                <Entypo name='star' size={15} color={"#db9004"} />
                <Entypo name='star' size={15} color={"#db9004"} />
                <Entypo name='star' size={15} color={"#db9004"} />
                <Entypo name='star' size={15} color={"#db9004"} />
                <Entypo name='star' size={15} color={"#db9004"} />
                <Text style={[tw`${typography.smText} ml-3`, { color: colors.TEXT_LIGHT }]} >6 reviews</Text>
              </View>
              {/* price */}
              <View style={tw`flex-row items-center mb-1`}>
                <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>$345</Text>
                <Text style={tw`${typography.bgText} ml-4 text-red-400`}>$76</Text>
              </View>
              <View style={tw`flex-row items-center bg-green-50`}>
                <Text style={{ color: colors.BOX_BLACK, marginLeft: 20 }}>Availability : </Text>
                <Text style={{ color: colors.PRIMARY_COLOR }}>1345 products available </Text>
              </View>

              {/* <View style={tw`flex-row mt-5`}>
                <View style={tw`w-1/2`}>
                  <Text>WEIGHT</Text>
                  <ListItem.Accordion
                    content={
                      <ListItem.Content>
                        <ListItem.Title>Select unit</ListItem.Title>
                      </ListItem.Content>
                    }
                    isExpanded={this.state.unitExpanded}
                    onPress={() => this.setState({ ...this.state, unitExpanded: !this.state.unitExpanded })}
                  >
                    {[.5, 1, 2, 3, 5, 8].map((count, i) => (
                      <ListItem key={i} bottomDivider onPress={() => {
                        this.setState({ ...this.state, unitExpanded: !this.state.unitExpanded })
                      }}>
                        <ListItem.Content>
                          <ListItem.Title>{count} Kg</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                      </ListItem>
                    ))}
                  </ListItem.Accordion>
                </View>
                <View style={tw`w-1/2`}>
                  <Text>WEIGHT</Text>
                  <ListItem.Accordion
                    content={
                      <ListItem.Content>
                        <ListItem.Title>Select Boxes</ListItem.Title>
                      </ListItem.Content>
                    }
                    isExpanded={this.state.boxExpanded}
                    onPress={() => this.setState({ ...this.state, boxExpanded: !this.state.boxExpanded })}
                  >
                    {[1, 2, 3, 5, 8, 10].map((count, i) => (
                      <ListItem key={i} bottomDivider onPress={() => {
                        this.setState({ ...this.state, boxExpanded: !this.state.boxExpanded })
                      }}>
                        <ListItem.Content>
                          <ListItem.Title>{count} Boxes</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                      </ListItem>
                    ))}
                  </ListItem.Accordion>
                </View>
              </View> */}
              {/* Top tab navigation */} 
              <ProductDetailsNavigator />
              
            </View>
          </View >
        </ScrollView>
        {/* <View style={[tw`w-full items-center justify-center flex-row h-18 bg-white border-t border-gray-300`, { elevation: 45 }]}>
          <View style={{ backgroundColor: colors.PRIMARY_LIGHT, padding: 10, borderRadius: 5 }}>
            <View>
              <Text style={tw`absolute -top-2 -right-1 z-2 h-5 w-2.7 text-center rounded ${typography.smText} bg-yellow-300`}>0</Text>
              <Icon name='shoppingcart' type='antdesign' />
            </View>
          </View>
          <TouchableOpacity activeOpacity={.7} style={[tw`h-12 justify-center rounded-xl ml-3`, { backgroundColor: colors.PRIMARY_COLOR, width: spaces.widthSix }]}>
            <Text style={tw`text-center text-white ${typography.smText}`}>+ Add to cart</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    )
  }
}

export default HomeProduct