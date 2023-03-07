import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Avatar, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, navigation, spaces } from '../constants';
import { typography } from '../theme';
import { DataTable } from 'react-native-paper';

export class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.address = "Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.";
    }

    render() {
        return (
            <View style={tw`flex-1`}>
                <View style={tw`h-1/3 w-full bg-gray-400 p-3 items-end`}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.PROFILE_NOTIFICATION)}>
                        <Icon type='feather' name='bell' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Avatar
                        size={74}
                        rounded
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnxmnJi3tU50uY093zefZgSVGcO-AiE3ZRQ&usqp=CAU" }}
                        containerStyle={{ backgroundColor: 'orange', alignSelf: "center", marginTop: -37, marginBottom: 30 }}
                    >
                        <Avatar.Accessory size={24} />
                    </Avatar>

                    {/* details of user */}
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Title>Name </DataTable.Title>
                            <DataTable.Cell>Samuel Jhon</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>Phone </DataTable.Title>
                            <DataTable.Cell>+91 999999999</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>State </DataTable.Title>
                            <DataTable.Cell>Kerala, India</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>Address</DataTable.Title>
                            <DataTable.Cell>{this.address}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>card</DataTable.Title>
                            <DataTable.Cell>0456-XXXX-XXXX-XXXX</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>

                    <View style={tw`mt-9 flex-row m-3 justify-between`}>
                        <TouchableOpacity style={{ width: spaces.width * .450, height: 39, backgroundColor: colors.PRIMARY_COLOR, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
                            <Text style={tw`${typography.smText} text-white`}>Edit Address</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: spaces.width * .450, height: 39, backgroundColor: colors.PRIMARY_COLOR, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
                            <Text style={tw`${typography.smText} text-white`}>Edit Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default ProfileScreen