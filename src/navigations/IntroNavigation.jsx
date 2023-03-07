import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "../constants";
import Intro from "../screens/Intro";
import IntroDelivery from "../screens/IntroDelivery";
import IntroPayment from "../screens/IntroPayment";
import IntroProduct from "../screens/IntroProduct";
import Login from "../screens/Login/Login";
import Sign from "../screens/Signup/Sign";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default IntroNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={navigation.LOGIN} component={Login}/>
            <Stack.Screen name={navigation.SIGN_UP} component={Sign}/>
            <Stack.Screen name={navigation.INTRO} component={Intro}/>
            <Stack.Screen name={navigation.INTRO_PRODUCT} component={IntroProduct}/>
            <Stack.Screen name={navigation.INTRO_DELIVERY} component={IntroDelivery} />
            <Stack.Screen name={navigation.INTRO_PAYMENT} component={IntroPayment} />
            <Stack.Screen name={navigation.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator}/>
        </Stack.Navigator>
    )
}