import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Icon } from "react-native-elements";
import Card from "../components/Card";
import Gpay from "../components/Gpay";
import Paypal from "../components/Paypal";
import { colors, navigation } from "../constants";
import { Text } from "react-native-elements";
import FontIcon from "react-native-vector-icons/FontAwesome5";


const TopTab = createMaterialTopTabNavigator();

export default function PaymentNavigator() {
    return (
        <TopTab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                height: "100%",
                backgroundColor: colors.PRIMARY_COLOR
            }
        }}>
            <TopTab.Screen name={navigation.CARD} component={Card}
                options={{
                    tabBarIcon: ({ focused }) => <Icon type="antdesign" name="creditcard" size={39} color={focused ? colors.WHITE_COLOR : colors.PRIMARY_COLOR} />,
                    tabBar: () => <Text>hello</Text>,
                    tabBarIconStyle: { height: "100%", width: "100%" },
                }}
            />
            <TopTab.Screen name={navigation.PAYPAL} component={Paypal}
                options={{
                    tabBarIcon: ({ focused }) => <Icon type="entypo" name="paypal" size={39} color={focused ? colors.WHITE_COLOR : colors.PRIMARY_COLOR} />,
                    tabBar: () => <Text>hello</Text>,
                    tabBarIconStyle: { height: "100%", width: "100%" },
                }}
            />
            <TopTab.Screen name={navigation.GPAY} component={Gpay}
                options={{
                    tabBarIcon: ({ focused }) => <FontIcon name="google-pay" size={39} color={focused ? colors.WHITE_COLOR : colors.PRIMARY_COLOR} />,
                    tabBarIconStyle: { height: "100%", width: "100%" },
                }}
            />
        </TopTab.Navigator>
    )
}