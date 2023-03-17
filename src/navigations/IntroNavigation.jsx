import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { navigation } from "../constants";
import store from "../redux/store/store";
import Intro from "../screens/Intro/Intro";
import IntroDelivery from "../screens/Intro/IntroDelivery";
import IntroPayment from "../screens/Intro/IntroPayment";
import IntroProduct from "../screens/Intro/IntroProduct";
import Login from "../screens/Login/Login";
import Sign from "../screens/Signup/Sign";
import BottomTabNavigator from "./BottomTabNavigator";
import { useState } from "react";
import Realm from "../config/schema";

const Stack = createStackNavigator();

export default IntroNavigation = () => {
    const [login, setLogin] = useState(store.getState().dataReducer.userFirst);

    if (!login) {
        Realm.write(() => {
            Realm.create("Login", {
                firstUser: false
            })
        })
    }

    const unsubscribe = store.subscribe(() => {
        setLogin(store.getState().dataReducer.userFirst)
    })

    return (
        <Provider store={store}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {
                    login ?
                        (
                            <>
                                <Stack.Screen name={navigation.LOGIN} component={Login} />
                                <Stack.Screen name={navigation.SIGN_UP} component={Sign} />
                            </>
                        )
                        :
                        <>
                            <Stack.Screen name={navigation.INTRO} component={Intro} />
                            <Stack.Screen name={navigation.INTRO_PRODUCT} component={IntroProduct} />
                            <Stack.Screen name={navigation.INTRO_DELIVERY} component={IntroDelivery} />
                            <Stack.Screen name={navigation.INTRO_PAYMENT} component={IntroPayment} />
                            <Stack.Screen name={navigation.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
                        </>
                }
            </Stack.Navigator>
        </Provider>
    )
}