import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { useEffect, useState } from "react";
import { navigation } from "../constants";
import store from "../redux/store/store";
import Intro from "../screens/Intro/Intro";
import IntroDelivery from "../screens/Intro/IntroDelivery";
import IntroPayment from "../screens/Intro/IntroPayment";
import IntroProduct from "../screens/Intro/IntroProduct";
import Login from "../screens/Login/Login";
import Sign from "../screens/Signup/Sign";
import BottomTabNavigator from "./BottomTabNavigator";
import Realm from "../config/schema";

const Stack = createStackNavigator();

export default IntroNavigation = () => {
    const [checkUser, setCheckUser] = useState({ showLog: true, showHome: false });
    const checkClientDb = Realm.objects("Login");
    const db = checkClientDb.filtered(`firstUser = ${false}`);

    store.subscribe(() => {
        const db = checkClientDb.filtered(`firstUser = ${false}`);
        setCheckUser({ ...checkUser, showLog: !db.length > 0 });
    });

    // Realm.write(() => {
    //     const login = Realm.objects("Login")[0];
    //     login.firstUser = store.getState().dataReducer.userFirst
    // })

    // checking user log in initial render
    useEffect(() => {
        setCheckUser({ ...checkUser, showLog: !db.length > 0 });
    }, [])

    return (
        <Provider store={store}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={checkClientDb.showHome && navigation.BOTTOM_TAB_NAVIGATOR}>
                {
                    checkUser.showLog ?
                        (
                            <>
                                <Stack.Screen name={navigation.LOGIN} component={Login} />
                                <Stack.Screen name={navigation.SIGN_UP} component={Sign} />
                            </>
                        )
                        :
                        (
                            <>
                                <Stack.Screen name={navigation.INTRO} component={Intro} />
                                <Stack.Screen name={navigation.INTRO_PRODUCT} component={IntroProduct} />
                                <Stack.Screen name={navigation.INTRO_DELIVERY} component={IntroDelivery} />
                                <Stack.Screen name={navigation.INTRO_PAYMENT} component={IntroPayment} />
                                <Stack.Screen name={navigation.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
                            </>
                        )
                }
            </Stack.Navigator>
        </Provider>
    )
}