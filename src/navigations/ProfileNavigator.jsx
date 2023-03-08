import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors, navigation } from "../constants"; 
import EditAddress from "../screens/Profile/EditAddress";
import EditPayment from "../screens/Profile/EditPayment";
import ProfileNotification from "../screens/Profile/ProfileNotification";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigator = function (props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigation.PROFILE_SCREEN} component={ProfileScreen} />
            <Stack.Screen name={navigation.PROFILE_NOTIFICATION} component={ProfileNotification} />
            <Stack.Screen
                name={navigation.EDIT_ADDRESS}
                component={EditAddress}
                options={{
                    headerShown: true,
                    title: "Edit Address",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen name={navigation.EDIT_PAYMENT} component={EditPayment} options={{
                headerShown: true,
                title: "Edit Payment",
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                        onPress={props.navigation.goBack}
                    >
                        <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;
