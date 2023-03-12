import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { Icon } from '@rneui/themed';
import { colors, navigation } from '../../constants';
import { typography } from '../../theme';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/slices/userData';
import checkUser from '../../config/checkUser';

export class Sign extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            street: "",
            city: "",
            email: "",
            houseNo: "",
            state: "",
            zip: "",
            phone: "",
            passwd: ""
        }

        this.checkValLength = () => {
            for (const key in this.state) {
                if (this.state[key].length === 0) {
                    return true;
                }
            }
            return false;
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={tw`flex-1`} behavior={"height"}>
                <View style={tw`flex-1 p-3 justify-center`}>

                    <Text style={tw`${typography.bgText} text-center mb-4 underline`}>Sign Up</Text>

                    <TextInput onChangeText={(val) => this.setState({ ...this.state, name: val })} value={this.state.name} placeholder='Name' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
                    <TextInput onChangeText={(val) => this.setState({ ...this.state, street: val })} value={this.state.street} placeholder='Street Address' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
                    <TextInput onChangeText={(val) => this.setState({ ...this.state, city: val })} value={this.state.city} placeholder='City/Town' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
                    <TextInput onChangeText={(val) => this.setState({ ...this.state, houseNo: val })} value={this.state.houseNo} placeholder='House no' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
                    <View style={tw`flex-row justify-evenly`}>
                        <SelectDropdown
                            defaultButtonText='State'
                            buttonStyle={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-gray-300 mb-3`}
                            buttonTextStyle={tw`text-base`}
                            data={["Kerala", "Karnataka", "Tamilnadu", "Andra", "Telangana"]}
                            renderDropdownIcon={() => (
                                <Icon name='keyboard-arrow-down' type='materialicons' />
                            )}
                            onSelect={(selectedItem, index) => {
                                this.setState({ ...this.state, state: selectedItem })
                            }}
                        />
                        <TextInput
                            placeholder={"Zip Code"}
                            onChangeText={(text) => this.setState({ ...this.state, zip: text })}
                            style={tw`bg-gray-100 rounded mt-2 w-.8/2 border-2 border-gray-300 mb-3 pl-2`}
                        />
                    </View>
                    <TextInput onChangeText={(val) => this.setState({ ...this.state, phoneNo: val })} value={this.state.phoneNo} placeholder='Phone no' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
                    <TextInput onChangeText={(val) => this.setState({ ...this.state, passwd: val })} secureTextEntry value={this.state.passwd} placeholder='Password' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />

                    <TouchableOpacity onPress={async () => {
                        const status = await checkUser("sign", this.state);
                        if (status.status === 404) {
                            Alert.alert("Username already exist", status.message);
                        } else {
                            this.props.navigation.navigate(navigation.INTRO);
                        }
                    }}
                        style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: this.checkValLength() ? colors.PRIMARY_LIGHT : colors.PRIMARY_COLOR }]}
                    >
                        <Text style={tw`${typography.smText} text-center text-white`}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={tw`mt-2 flex-row justify-center`}>
                        <Text>Already have an account</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.LOGIN)}>
                            <Text style={tw`ml-2 ${typography.smText} text-blue-400`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sign);