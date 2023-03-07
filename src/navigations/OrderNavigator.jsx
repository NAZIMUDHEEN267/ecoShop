import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, navigation } from "../constants";
import OrderDeliver from "../screens/OrderDeliver";
import OrderCancel from "./OrderCancel";
import OrderProcess from "./OrderProcess";

const TopTab = createMaterialTopTabNavigator();

export default function OrderNavigator() {
    return (
        <TopTab.Navigator screenOptions={{
            tabBarIndicatorStyle: {display: "none"},
            tabBarBounces: false
        }}
        initialRouteName={navigation.ORDER_PROCESSING}
        >
            <TopTab.Screen component={OrderDeliver} name={navigation.ORDER_DELIVERED}
                options={{
                    tabBarActiveTintColor: colors.WHITE_COLOR,
                    tabBarInactiveTintColor: colors.PRIMARY_COLOR,
                    tabBarBounces: false,
                    tabBarLabel: (l) => (
                        <Text style={[
                            l.focused ? 
                                { color: colors.WHITE_COLOR, backgroundColor: colors.PRIMARY_COLOR }
                                : { color: colors.PRIMARY_COLOR, backgroundColor: colors.PRIMARY_LIGHT }
                            , { padding: 6, borderRadius: 5 }
                        ]}>Delivered</Text>
                    )
                }}
            />
            <TopTab.Screen component={OrderProcess} name={navigation.ORDER_PROCESSING}
                options={{
                    tabBarActiveTintColor: colors.WHITE_COLOR,
                    tabBarInactiveTintColor: colors.PRIMARY_COLOR,
                    tabBarLabel: (l) => (
                        <Text style={[
                            l.focused ?
                                { color: colors.WHITE_COLOR, backgroundColor: colors.PRIMARY_COLOR }
                                : { color: colors.PRIMARY_COLOR, backgroundColor: colors.PRIMARY_LIGHT }
                            , { padding: 6, borderRadius: 5 }
                        ]}>Processing</Text>
                    )
                }}
            />
            <TopTab.Screen component={OrderCancel} name={navigation.ORDER_CANCELED}
                options={{
                    tabBarActiveTintColor: colors.WHITE_COLOR,
                    tabBarInactiveTintColor: colors.PRIMARY_COLOR,
                    tabBarLabel: (l) => (
                        <Text style={[
                            l.focused ?
                                { color: colors.WHITE_COLOR, backgroundColor: colors.PRIMARY_COLOR }
                                : { color: colors.PRIMARY_COLOR, backgroundColor: colors.PRIMARY_LIGHT }
                            , { padding: 6, borderRadius: 5 }
                        ]}>Canceled</Text>
                    )
                }}
            />
        </TopTab.Navigator>
    )
}