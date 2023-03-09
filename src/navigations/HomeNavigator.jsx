import { createStackNavigator } from "@react-navigation/stack";
import { colors, navigation } from "../constants";
import Home from "../screens/Home/Home";
import HomeAllCategories from "../screens/Home/HomeAllCategories";
import HomeAllProducts from "../screens/Home/HomeAllProducts";
import HomeProduct from "../screens/Home/HomeProduct";
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import HomeReview from "../screens/Home/HomeReview";
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../redux/slices/product";
import Cart from "../screens/Home/Cart";

const Stack = createStackNavigator();

export function HomeNavigator(props) {

    return (
        <Stack.Navigator initialRouteName={navigation.HOME}>
            <Stack.Screen component={Home} name={navigation.HOME} options={{ headerShown: false }} />
            <Stack.Screen
                component={HomeAllCategories}
                name={navigation.ALL_CATEGORIES}
                options={{
                    title: "All categories",
                    headerStyle: tw`bg-gray-100`,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name={navigation.CART}
                component={Cart}
                options={{
                    title: "Cart",
                    headerStyle: tw`bg-gray-100`,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                component={HomeProduct}
                name={navigation.PRODUCT}
                options={{
                    headerStyle: tw`bg-gray-100`,
                    title: "Popular",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen component={HomeAllProducts} name={navigation.ALL_PRODUCTS} options={{
                title: props.productData.category,
                headerStyle: tw`bg-gray-100`,
                headerTitleAlign: "center",
                headerRight: () => (
                    <TouchableOpacity onPress={() => props.setShowCategory(!props.productData.showCategory)} style={tw`h-full w-15 items-center justify-center`}>
                        <Icon type="antdesign" name="menu-unfold" />
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                        onPress={props.navigation.goBack}
                    >
                        <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                    </TouchableOpacity>
                )
            }} />
            <Stack.Screen
                name={navigation.HOME_REVIEW}
                component={HomeReview}
                options={{
                    title: "Review",
                    headerStyle: tw`bg-gray-100`,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ height: 35, alignItems: "center", justifyContent: "center", borderRadius: 100, width: 35, marginLeft: 20, backgroundColor: colors.PRIMARY_COLOR }}
                            onPress={props.navigation.goBack}
                        >
                            <Icon type="entypo" name="chevron-left" size={30} color={colors.TEXT_LIGHT} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);