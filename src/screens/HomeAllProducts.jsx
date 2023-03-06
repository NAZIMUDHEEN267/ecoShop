import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ProductItem from '../components/ProductItem';
import tw from "twrnc";
import { ScrollView, TouchableOpacity } from 'react-native';
import { typography } from '../theme';

export class HomeAllProducts extends Component {

  state = {
    scrollY: 0,
    show: false
  }

  Buttons = [
    "New Arrival",
    "Best Selling",
    "Discount Products",
    "Height Price",
    "Low Price",
    "Popular"
  ]

  render() {
    return (
      <ScrollView style={tw`h-full w-full`} onScroll={(e) => this.setState({scrollY: e.nativeEvent.contentOffset.y})}>
        <View style={tw`flex-wrap flex-1 flex-row p-3`}>
          <View style={[tw`p-3 bg-white right-2 absolute z-2 top-${this.state.scrollY / 4}`, {elevation: 45, display: this.state.show ? "flex" : "none"}]}>
            {
              this.Buttons.map((btn, i) => {
                return (
                  <View style={tw`bg-white p-2`} key={i}>
                    <TouchableOpacity>
                      <Text style={tw`text-center text-lg`}>{btn}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
          {/* <Text onPress={() => this.setState({ ...this.state, show: !this.state.show })} >hello</Text> */}
          {
            Array(10).fill(0).map((item, i) => (
              <ProductItem width={"3.8/8"} key={i} nav={this.props.navigation}/>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

export default HomeAllProducts