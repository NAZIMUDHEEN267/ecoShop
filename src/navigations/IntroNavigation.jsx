import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "../constants";
import Intro from "../screens/Intro";
import IntroDelivery from "../screens/IntroDelivery";
import IntroPayment from "../screens/IntroPayment";
import IntroProduct from "../screens/IntroProduct";
import HomeNavigator from "./HomeNavigation";

const Stack = createStackNavigator();

export default IntroNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={navigation.HOME_NAVIGATOR}>
            <Stack.Screen name={navigation.INTRO} component={Intro}/>
            <Stack.Screen name={navigation.INTRO_PRODUCT} component={IntroProduct}/>
            <Stack.Screen name={navigation.INTRO_DELIVERY} component={IntroDelivery} />
            <Stack.Screen name={navigation.INTRO_PAYMENT} component={IntroPayment} />
            <Stack.Screen name={navigation.HOME_NAVIGATOR} component={HomeNavigator}/>
        </Stack.Navigator>
    )
}