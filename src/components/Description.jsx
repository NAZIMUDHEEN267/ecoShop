import { Text, ScrollView } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { typography } from '../theme'

export class Description extends Component {
  render() {
    return (
      <ScrollView style={{height: 300, padding: 10}}>
        <Text style={tw`${typography.mdText} mb-2`}>Description</Text>
        <Text>
           asperiores sit impedit assumenda maxime odit dolor dolore quaerat ea in numquam corporis laudantium, a quibusdam, corrupti maiores. Magnam, facere ipsam!
          Nostrum quam eum quis quas in minima? Maiores atque, mollitia expedita sapiente optio commodi porro exercitationem! Adipisci exercitationem odit odio excepturi deleniti nulla optio ullam eos nobis voluptate. Ratione, autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem corporis labore doloremque iste harum unde ratione eius hic neque quas asperiores amet modi impedit! Rerum distinctio est cumque temporibus!
          Natus, impedit aperiam! Distinctio perspiciatis iusto ea dolore consequuntur sed numquam excepturi eligendi deserunt ipsam tempore alia
        </Text>
      </ScrollView>
    )
  }
}

export default Description