import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { spaces } from '../constants';
import tw from "twrnc";
import ProductDetails from '../components/ProductDetails';
import ProductStatus from '../components/ProductStatus';
import { ScrollView } from 'react-native-gesture-handler';

export class OrderProcess extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    Array(1).fill("grape").forEach((product, i) => {
      this.state[product + i] = {
        "Delivered": false,
        "Out for delivery": false,
        "Shipped": false,
        "Ordered": true,
      }
    })
  }

  render() {
    return (
      <ScrollView style={tw`flex-1 ${spaces['p-normal']} pt-0`}>
        {
          Object.keys(this.state)
          .map((status, i) => <ProductStatus key={i} status={this.state[status]} />)
        }
      </ScrollView>
    )
  }
}

export default OrderProcess