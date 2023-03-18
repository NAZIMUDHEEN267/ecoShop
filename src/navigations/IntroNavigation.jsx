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
    const [log, setLog] = useState([]);

    store.subscribe(() => {
        setCheckUser({ ...checkUser, showLog: !log.length > 0 });
    });

    // create new collection 
    function createDb() {
       if(!store.getState().dataReducer.userFirst) {
           Realm.write(() => {
               Realm.create("Login", {
                   firstUser: false,
                   showHome: false
               })
           })
       }
    }

    // checking user log in initial render
    useEffect(() => {
        Realm.objects("Login")[0] || createDb();

        const db = Realm.objects("Login").filtered(`firstUser = ${false}`);

        setLog(db);
        setCheckUser({ ...checkUser, showLog: !db.length > 0 });

    }, [store.getState().dataReducer.userFirst])

    return (
        <Provider store={store}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {
                    log[0]?.showHome ?
                        (
                            <>
                                <Stack.Screen name={navigation.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
                            </>
                        )
                        : (checkUser.showLog) ?
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