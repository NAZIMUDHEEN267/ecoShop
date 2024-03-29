import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Image } from 'react-native-elements/dist/image/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { spaces, colors } from '../../constants';
import { typography } from '../../theme';
import Entypo from "react-native-vector-icons/Entypo";
import { Icon } from '@rneui/themed';
import SelectDropdown from 'react-native-select-dropdown'
import ProductDetailsNavigator from '../../navigations/ProductDetialsNavigator';
import { mapStateToProps, mapDispatchToProps } from '../../redux/slices/product';
import { connect } from "react-redux";

export class HomeProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unitExpanded: false,
      boxExpanded: false,
      previewBorder: 0,
      mainImg: this.props.route.params.images[0]
    }

    this.productObj = this.props.route.params;
    this.productObj.time = new Date().toISOString();
  }

  render() {
    return (
      <View style={tw`flex-1`}>
        <ScrollView>
          <View style={tw`w-full`}>
            <Image
              source={{ uri: this.state.mainImg }}
              style={{ height: spaces.heightHalf / 1.4 }}
              resizeMode={"cover"}
            />

            <View style={tw`bg-white h-full w-full ${spaces['p-normal']}`}>
              <View style={[tw`justify-center items-center flex-row mb-4`, { marginTop: -39 }]}>
                {
                  this.productObj.images.map((img, i) => i < 3 ? (
                    <TouchableOpacity activeOpacity={.7}
                      key={i}
                      style={[tw`rounded h-24 w-24 mr-2`, { elevation: 10 }]}
                      onPress={() => this.setState({ ...this.state, previewBorder: i, mainImg: img })}
                    >
                      <Image
                        source={{ uri: img }}
                        style={tw`w-full h-full rounded-xl ${i === this.state.previewBorder ? "border-2 border-green-400" : ""}`}
                      />
                    </TouchableOpacity>
                  )
                    :
                    null
                  )
                }
              </View>

              <Text style={[tw`${typography.smText} mt-2`, { color: colors.TEXT_LIGHT }]}>{"vegetable".toLocaleUpperCase()}</Text>
              <Text style={[tw`${typography.smText}`, { color: colors.BOX_BLACK }]}>Kashmiri Apple</Text>
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
              <View style={tw`flex-row items-center mb-2`}>
                <Text style={[tw`${typography.smText}`, { textDecorationLine: "line-through", textDecorationStyle: "solid", color: colors.TEXT_LIGHT }]}>$345</Text>
                <Text style={tw`${typography.bgText} ml-4 text-red-400`}>$76</Text>
              </View>
              <View style={tw`flex-row items-center bg-green-100`}>
                <Text style={{ color: colors.BOX_BLACK, marginLeft: 20 }}>Availability : </Text>
                <Text style={{ color: colors.PRIMARY_COLOR }}>1345 products available </Text>
              </View>

              <View style={tw`flex-row mt-8 mb-8 justify-between`}>
                <View style={tw`w-1/2`}>
                  <Text>WEIGHT</Text>
                  <SelectDropdown
                    data={[.5, 1, 2, 3, 4].map(item => item)}
                    buttonStyle={tw`bg-gray-100 rounded mt-2 w-5/6`}
                    defaultButtonText='Select Unit'
                    buttonTextStyle={tw`text-base`}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    renderDropdownIcon={() => (
                      <Icon name='keyboard-arrow-down' type='materialicons' />
                    )}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      return item
                    }}
                  />
                </View>
                <View style={tw`w-1/2`}>
                  <Text>BOXES</Text>
                  <SelectDropdown
                    defaultButtonText='Select Boxes'
                    buttonStyle={tw`bg-gray-100 rounded mt-2 w-5/6`}
                    buttonTextStyle={tw`text-base`}
                    data={[1, 2, 3, 4, 5].map(item => item + " Boxes")}
                    renderDropdownIcon={() => (
                      <Icon name='keyboard-arrow-down' type='materialicons' />
                    )}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                      return selectedItem
                    }}
                  />
                </View>
              </View>
              {/* Top tab navigation */}
              <ProductDetailsNavigator />
            </View>
          </View >
        </ScrollView>
        <View style={[tw`w-full items-center justify-center flex-row h-18 bg-white border-t border-gray-300`, { elevation: 45 }]}>
          <View style={{ backgroundColor: colors.PRIMARY_LIGHT, padding: 10, borderRadius: 5, width: spaces.width * .130, alignItems: "center", justifyContent: "center" }}>
            <View>
              <Text style={tw`absolute -top-2 -right-1 z-2 h-5 w-2.7 text-center text-white rounded ${typography.smText} bg-green-500`}>{this.props.productData.cart.length}</Text>
              <Icon name='shoppingcart' type='antdesign' />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.setProductData(this.productObj)}
            activeOpacity={.7} style={[tw`h-12 justify-center rounded-xl ml-3`, { backgroundColor: colors.PRIMARY_COLOR, width: spaces.width * .8 }]}>
            <Text style={tw`text-center text-white ${typography.smText}`}>+ Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProduct);