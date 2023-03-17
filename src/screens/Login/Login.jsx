import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
  Image
} from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native-gesture-handler';
import { colors, navigation } from '../../constants';
import { typography } from '../../theme';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/slices/userData';
import checkUser from '../../config/checkUser';
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth";
import GoogleIcon from "../../assets/images/google.png";
import { WEB_CLIENT_ID } from "@env";

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      passwd: "",
    }

    // auth().signOut().then(value => console.log(value)).catch(err => console.log(err))
    this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID
    })
  }

  async handleGoogleSignIn() {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

    const signedUser = auth().signInWithCredential(googleCredentials);

    signedUser
      .then(user => {
        const { displayName, email, phoneNumber, photoURL } = user.user;

        const dataObj = {
          username: displayName,
          email: email,
          phone: phoneNumber || "000000000",
          photo: photoURL,
          street: "Not defined",
          city: "Not defined",
          houseNo: "0000",
          state: "Not defined",
          zip: "0000",
        }

        this.props.setSignData(dataObj);
        this.props.setUserLog(false);
      })
      .catch(err => {
        this.props.setUserLog(false);
      })

  }

  render() {
    return (
      <KeyboardAvoidingView style={tw`flex-1`} behavior={"height"}>
        <View style={tw`flex-1 p-3 justify-center`}>

          <Text style={tw`${typography.bgText} text-center mb-4 underline`}>Login</Text>

          <TextInput onChangeText={(val) => this.setState({ ...this.state, username: val })} value={this.state.name} placeholder='Name' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />
          <TextInput onChangeText={(val) => this.setState({ ...this.state, passwd: val })} secureTextEntry value={this.state.passwd} placeholder='Password' style={tw`h-15 border-2 border-gray-300 rounded pl-2 mb-2`} />

          <TouchableOpacity onPress={async () => {
            const status = await checkUser("login", this.state);

            if (status.status === 404) {
              Alert.alert("login failed", status.message);
            } else {
              this.props.setLogData(status.data)
              this.props.navigation.navigate(navigation.INTRO);
            }
          }}
            style={[tw`mt-5 h-13 w-full justify-center rounded`, { backgroundColor: colors.PRIMARY_COLOR }]}>
            <Text style={tw`${typography.smText} text-center text-white`}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleGoogleSignIn} style={tw`mt-5 h-13 w-full justify-center rounded bg-blue-700 flex-row items-center`}>
            <Image source={GoogleIcon} style={tw`w-6 h-6 mr-3`} />
            <Text style={tw`${typography.smText} text-center text-white`}>Continue with google</Text>
          </TouchableOpacity>

          <View style={tw`mt-2 flex-row justify-center`}>
            <Text>Create new account</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.SIGN_UP)}>
              <Text style={tw`ml-2 ${typography.smText} text-blue-400`}>Sign</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);