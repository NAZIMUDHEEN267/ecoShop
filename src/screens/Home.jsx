import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Header, HeaderProps, Input } from "@rneui/themed";
import { colors } from '../constants';
import tw from "twrnc";

export class Home extends Component {
  render() {
    return (
     <View>
      <Header 
        containerStyle={tw`h-3/6 flex-col`}
        leftContainerStyle={tw`flex-col bg-yellow-200 flex-1`}
        backgroundColor={colors.PRIMARY_COLOR}
        barStyle={'light-content'}
        leftComponent={() => (
          <View>
            <Text>hello</Text>
          </View>
        )}
        rightComponent={() => (
          <View>
            <Text>hello</Text>
          </View>
        )}
        centerComponent={() => (
          <View>
            <Text>hello</Text>
          </View>
        )}
      />
     </View>
    )
  }
}

export default Home