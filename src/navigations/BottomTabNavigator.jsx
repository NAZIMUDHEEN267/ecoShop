import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, navigation } from "../constants";
import Profile from "../screens/Profile";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import HomeNavigator from "./HomeNavigator";
import OrderNavigator from "./OrderNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator(props) {
    return (
        <BottomTab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}} initialRouteName={navigation.ORDER}>
            <BottomTab.Screen component={HomeNavigator} name={navigation.HOME_NAVIGATOR} options={() => ({
                tabBarIcon: ({focused}) => <AntDesign name="home" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT}/>,
                tabBarStyle: {height: 0}
            })}/>
            <BottomTab.Screen component={OrderNavigator} name={navigation.ORDER} options={() => ({
                tabBarIcon: ({focused}) => <Feather name="shopping-bag" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT} />,
                headerShown: true,
                title: "Order",
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                        onPress={props.navigation.goBack}
                    >
                        <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                    </TouchableOpacity>
                )
            })} />
            <BottomTab.Screen component={Profile} name={navigation.PROFILE} options={() => ({
                tabBarIcon: ({focused}) => <FontAwesome name="user-circle" size={25} color={focused ? colors.PRIMARY_COLOR : colors.TEXT_LIGHT} />
            })} />
        </BottomTab.Navigator>
    )
}