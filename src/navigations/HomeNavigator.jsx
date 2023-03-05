import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "../constants";
import Home from "../screens/Home";
import HomeAllCategories from "../screens/HomeAllCategories";
import HomeAllProducts from "../screens/HomeAllProducts";
import HomeProduct from "../screens/HomeProduct";
import { Icon } from "@rneui/themed";
import { TouchableOpacity, View, Text } from "react-native";
import tw from "twrnc";

const Stack = createStackNavigator();

export function HomeNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigation.ALL_PRODUCTS}>
            <Stack.Screen component={Home} name={navigation.HOME} />
            <Stack.Screen component={HomeAllCategories} name={navigation.ALL_CATEGORIES} />
            <Stack.Screen component={HomeProduct} name={navigation.PRODUCT} />
            <Stack.Screen component={HomeAllProducts} name={navigation.ALL_PRODUCTS} options={{
                headerShown: true,
                title: "New arrivals",
                headerRight: () => (
                    <TouchableOpacity style={tw`h-full w-15 items-center justify-center`}>
                        <Icon type="antdesign" name="menu-unfold" />
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator