import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "../constants";
import ProfileNotification from "../screens/ProfileNotification";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigator = function () {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigation.PROFILE_SCREEN} component={ProfileScreen}/>
            <Stack.Screen name={navigation.PROFILE_NOTIFICATION} component={ProfileNotification}/>
            {/* <Stack.Screen name={navigation.PROFILE_ADDRESS} component={Profile}/> */}
        </Stack.Navigator>
    )
}

export default ProfileNavigator;
