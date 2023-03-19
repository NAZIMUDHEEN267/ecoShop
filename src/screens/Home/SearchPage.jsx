import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../constants';
import tw from "twrnc"
import Entypo from "react-native-vector-icons/Entypo"
import { typography } from '../../theme';

export class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        }
        this.discount = (this.props.route.params.items.discountPercentage / this.props.route.params.items.price) * 100
    }

    componentDidMount() {
        this.setState({ data: this.props.route.params.items })
    }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center"}}>
        {
            this.state.data.map((item) => {
                Object.defineProperty(this.state.data, item, {
                    enumerable: true,
                    configurable: true
                })

                return (
                    <TouchableOpacity style={tw`h-34 w-full rounded`}>
                        <Image 
                            source={{uri: item.images[0]}}
                            style={tw`h-1/2 w-full`}
                        />
                    </TouchableOpacity>
                )
                })
        }
      </View>
    )
  }
}

export default SearchPage