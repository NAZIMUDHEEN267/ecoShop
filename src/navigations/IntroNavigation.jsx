import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { useEffect, useRef, useState } from "react";
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

    const usersLength = useRef(Realm.objects("Sign").length);
    const data = store.getState().dataReducer;

    store.subscribe(() => {
        setCheckUser({ ...checkUser, showLog: !log.length > 0 });
    });

    // create new collection 
    function createDb() {
       if(!data.userFirst) {
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

        const signCltn = Realm.objects("Sign");
        const db = Realm.objects("Login").filtered(`firstUser = ${false}`);
        setLog(db);

        if(db.length > 0) {
            setCheckUser({ ...checkUser, showLog: !db.length > 0 });
        } else if(signCltn.length > usersLength) {
            setCheckUser({...checkUser, showLog: usersLength < signCltn.length})
        }

    }, [data.userFirst])

    // effect for login
    useEffect(() => {
        if(data.userlogin) {
            Realm.write(() => {
                const login = Realm.objects("Login")[0];
                login.showHome = true;
            })
        }
    }, [data.userlogin])

    return (
        <Provider store={store}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={navigation.LOGIN} component={Login} />
            </Stack.Navigator>
        </Provider>
    )
}