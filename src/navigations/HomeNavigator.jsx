import { createStackNavigator } from "@react-navigation/stack";
import { navigation } from "../constants";
import Home from "../screens/Home";
import HomeAllCategories from "../screens/HomeAllCategories";
import HomeAllProducts from "../screens/HomeAllProducts";
import HomeProduct from "../screens/HomeProduct";
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import HomeReview from "../screens/HomeReview";

const Stack = createStackNavigator();

export function HomeNavigator(props) {
    console.log(props.navigation.getState())
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigation.PRODUCT}>
            <Stack.Screen component={Home} name={navigation.HOME} />
            <Stack.Screen component={HomeAllCategories} name={navigation.ALL_CATEGORIES} />
            <Stack.Screen
                component={HomeProduct}
                name={navigation.PRODUCT} />
            <Stack.Screen component={HomeAllProducts} name={navigation.ALL_PRODUCTS} options={{
                headerShown: true,
                title: "New arrivals",
                headerRight: () => (
                    <TouchableOpacity style={tw`h-full w-15 items-center justify-center`}>
                        <Icon type="antdesign" name="menu-unfold" />
                    </TouchableOpacity>
                )
            }} />
            <Stack.Screen 
                name={navigation.REVIEW}
                component={HomeReview}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator