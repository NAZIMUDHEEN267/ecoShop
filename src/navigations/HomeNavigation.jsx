import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, navigation } from "../constants";
import Home from "../screens/Home";
import Order from "../screens/Order";
import Profile from "../screens/Profile";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const BottomTab = createBottomTabNavigator();

export default function HomeNavigator() {
    return (
        <BottomTab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <BottomTab.Screen component={Home} name={navigation.HOME} options={() => ({
                tabBarIcon: ({focused}) => <AntDesign name="home" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT}/>,
            })}/>
            <BottomTab.Screen component={Order} name={navigation.ORDER} options={() => ({
                tabBarIcon: ({focused}) => <Feather name="shopping-bag" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT} />
            })} />
            <BottomTab.Screen component={Profile} name={navigation.PROFILE} options={() => ({
                tabBarIcon: ({focused}) => <FontAwesome name="user-circle" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT} />
            })} />
        </BottomTab.Navigator>
    )
}