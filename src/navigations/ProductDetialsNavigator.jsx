import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Description from "../components/Description";
import Review from "../components/Review";
import SellerInfo from "../components/SellerInfo";
import { navigation, colors } from "../constants";
import tw from "twrnc";
import { typography } from "../theme";

const Tab = createMaterialTopTabNavigator();

const ProductDetailsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.PRIMARY_COLOR,
            tabBarInactiveTintColor: colors.TEXT_LIGHT,
            tabBarIndicatorStyle:{backgroundColor: colors.PRIMARY_COLOR},
            tabBarLabelStyle: [{textTransform: "capitalize", elevation: 0},tw`${typography.smText}`],
        }}>
            <Tab.Screen name={navigation.PRODUCT_DESCRIPTION}
                component={Description}
                options={{
                    title: "Description"
                }}
            />
            <Tab.Screen name={navigation.PRODUCT_REVIEW}
                component={Review}
                options={{
                    title: "Review"
                }}
            />
            <Tab.Screen name={navigation.PRODUCT_INFO}
                component={SellerInfo}
                options={{
                    title: "seller info",
                    tabBarItemStyle: {borderColor: "yellow"}
                }}
            />
        </Tab.Navigator>
    )
}

export default ProductDetailsNavigator