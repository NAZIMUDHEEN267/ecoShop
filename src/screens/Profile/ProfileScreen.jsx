import { Text, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { Avatar, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, navigation, spaces } from '../../constants';
import { typography } from '../../theme';
import { DataTable } from 'react-native-paper';
import realm from '../../config/schema';
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/userData';
import { connect } from 'react-redux';

export class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            phone: "",
            state: "",
            city: "",
            houseNo: "",
            street: "",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnxmnJi3tU50uY093zefZgSVGcO-AiE3ZRQ&usqp=CAU",
            globalData: {}
        };

        this.dataObj = realm.objects("Sign")[0];
        this.props.setSignData(this.dataObj);
    }

    componentDidMount() {
        const { username, street, city, houseNo, state, phone, photo } = this.dataObj;
        const userPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnxmnJi3tU50uY093zefZgSVGcO-AiE3ZRQ&usqp=CAU";

        this.setState({username, street, city, houseNo, state, phone, photo: photo.length > 1 ? photo : userPhoto });
    }

    updateData() {
        console.log(this.props.getData);
    }

    render() {
        return (
            <View style={tw`flex-1`}>
                <View style={tw`h-1/3 w-full bg-gray-400 p-3 items-end`}>
                    <TouchableOpacity onPress={(e) => this.props.navigation.navigate(navigation.PROFILE_NOTIFICATION)}>
                        <Icon type='feather' name='bell' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Avatar
                        size={74}
                        rounded
                        source={{ uri: this.state.photo }}
                        containerStyle={{ backgroundColor: 'orange', alignSelf: "center", marginTop: -37, marginBottom: 30 }}
                    >
                        <Avatar.Accessory size={24} />
                    </Avatar>

                    {/* details of user */}
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Title>Name </DataTable.Title>
                            <DataTable.Cell>{this.state.username}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>Phone </DataTable.Title>
                            <DataTable.Cell>{this.state.phone}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>State </DataTable.Title>
                            <DataTable.Cell>{this.state.state}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>Address</DataTable.Title>
                            <DataTable.Cell>
                            {`${this.state.houseNo === 0 ? "" : this.state.houseNo} ${this.state.street === "Not defined" ? "" : this.state.street + ","} ${this.state.city}`}
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Title>card</DataTable.Title>
                            <DataTable.Cell>{"Not added"}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>

                    <View style={tw`mt-9 flex-row m-3 justify-between`}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.EDIT_ADDRESS)} style={{ width: spaces.width * .450, height: 39, backgroundColor: colors.PRIMARY_COLOR, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
                            <Text style={tw`${typography.smText} text-white`}>Edit Address</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.EDIT_PAYMENT)} style={{ width: spaces.width * .450, height: 39, backgroundColor: colors.PRIMARY_COLOR, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
                            <Text style={tw`${typography.smText} text-white`}>Edit Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);