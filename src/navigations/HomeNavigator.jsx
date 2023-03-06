import { createStackNavigator } from "@react-navigation/stack";
import { colors, navigation } from "../constants";
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
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigation.HOME}>
            <Stack.Screen component={Home} name={navigation.HOME} />
            <Stack.Screen component={HomeAllCategories} name={navigation.ALL_CATEGORIES} />
            <Stack.Screen
                component={HomeProduct}
                name={navigation.PRODUCT} 
                options={{
                    headerShown: true,
                    title: "Popular",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 40, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 40, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={35} color={colors.WHITE_COLOR} />
                        </TouchableOpacity>
                    )
                }}
                />
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
                name={navigation.HOME_REVIEW}
                component={HomeReview}
                options={{
                    headerShown: true,
                    title: "Review",
                    headerTitleAlign: "center",
                    headerLeft: (l) => (
                        <TouchableOpacity
                            style={{ height: 40, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 40, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={() => props.navigation.navigate(navigation.PRODUCT)}
                        >
                            <Icon type="entypo" name="chevron-left" size={35} color={colors.WHITE_COLOR} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator