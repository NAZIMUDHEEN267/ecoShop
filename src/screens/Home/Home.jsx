import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Icon, Image, SearchBar } from 'react-native-elements';
import tw from "twrnc";
import Carousel from 'react-native-reanimated-carousel';
import { colors, navigation, spaces } from '../../constants';
import { typography } from '../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import Fontisto from "react-native-vector-icons/Fontisto";
import CartImg from "../../assets/images/shopping_cart.png"
import ProductItem from '../../components/ProductItem';
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/product';
import { connect } from "react-redux";
import { ActivityIndicator } from 'react-native-paper';
const data = require("../../data/data.json")

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            data: null,
            loading: true
        }
    }

    categoryMaker(searchItem) {
        const values = this.state.data.filter((item) => {
            if (item.category === searchItem) {
                return item;
            }
        })

        return values;
    }

    // search product
    handleSearch() {
        const findItems = data.products.filter(product => {
            const dataText = product.title.toLowerCase();

            if(dataText.indexOf(this.state.searchText.toLowerCase()) > -1) {
                return product;
            }
        })

        this.props.navigation.navigate(navigation.SEARCH, {items: findItems});
    }

    componentDidMount() {
        // this.props.setUserLog(false);
        this.setState({ ...this.state, data: data.products, loading: false });
    }

    render() {
        return this.state.loading ?
            <View>
                <ActivityIndicator />
            </View>
            :
            <ScrollView style={tw`bg-gray-100`}>

                {/* header */}
                <View style={[tw`h-52 w-full rounded-bl-3xl rounded-br-3xl p-8 justify-between`, { backgroundColor: colors.PRIMARY_COLOR }]}>
                    <View style={tw`flex-row items-center justify-between`}>
                        <View style={tw`flex-row items-center`}>
                            <Fontisto name='opencart' size={26} />
                            <Text style={tw`${typography.mdText} ml-2`}>Eco Shop</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.CART)}>
                                <Text style={tw`absolute -top-2 -right-1 z-2 h-5 w-2.7 text-center rounded ${typography.smText} bg-yellow-300`}>{this.props.productData.cart.length}</Text>
                                <Image source={CartImg} style={{ height: 32, width: 32 }} resizeMode={"contain"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SearchBar
                        style={{ width: spaces.width }}
                        placeholder='Search Products'
                        placeholderTextColor={colors.TEXT_BG_COLOR}
                        inputStyle={tw`bg-white`}
                        containerStyle={tw`bg-white rounded-xl`}
                        inputContainerStyle={tw`bg-white`}
                        value={this.state.searchText}
                        onChangeText={(text) => this.setState({ searchText: text })}
                        searchIcon={() => (<TouchableOpacity onPress={() => this.handleSearch()}>
                            <Icon name='search' type='andesign'/>
                        </TouchableOpacity>)}
                    />
                </View>

                {/* main body */}
                <View style={tw`${spaces['p-normal']}`}>
                    {/* category */}
                    <View style={tw`mb-3`}>
                        <View style={tw`flex-row justify-between`}>
                            <Text style={[tw`${typography.smText}`, { color: colors.BOX_BLACK }]}>My market category</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.ALL_CATEGORIES)}>
                                <Text style={tw`${typography.smText}`}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex-row justify-around mt-2 mb-2`}>
                            <View style={[tw`w-1/5 h-24 p-3 items-center justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                                <TouchableOpacity activeOpacity={.7}>
                                    <Image
                                        className="w-10 h-14 mb-1"
                                        source={{ uri: this.state.data[0].thumbnail }}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={tw`text-center`}>Phon...</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[tw`w-1/5 h-24 p-3 items-center justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                                <TouchableOpacity activeOpacity={.7}>
                                    <Image
                                        className="w-10 h-14 mb-1"
                                        source={{ uri: "https://i.dummyjson.com/data/products/6/thumbnail.png" }}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={tw`text-center`}>Lap...</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[tw`w-1/5 h-24 p-3 items-center justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                                <TouchableOpacity activeOpacity={.7}>
                                    <Image
                                        className="w-10 h-14 mb-1"
                                        source={{ uri: "https://i.dummyjson.com/data/products/11/thumbnail.jpg" }}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={tw`text-center`}>Frag...</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[tw`w-1/5 h-24 p-3 items-center justify-center rounded-xl`, { backgroundColor: colors.PRIMARY_LIGHT }]}>
                                <TouchableOpacity activeOpacity={.7}>
                                    <Image
                                        className="w-10 h-14 mb-1"
                                        source={{ uri: "https://i.dummyjson.com/data/products/16/thumbnail.jpg" }}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={tw`text-center`}>Skin...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* carousel */}
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Carousel
                            loop
                            width={spaces.width - 40}
                            height={150}
                            autoPlay={true}
                            autoPlayInterval={2000}
                            data={this.state.data}
                            scrollAnimationDuration={2000}
                            renderItem={({ item, index }) => {
                                return (
                                    <View
                                        style={[{
                                            flex: 1,
                                            flexDirection: "row",
                                            justifyContent: "space-between"
                                        }, tw`bg-white ml-2`]}
                                    >
                                        <View style={tw`p-1 items-center h-full mt-2 w-1/2 `}>
                                            <Text style={[{ color: colors.PRIMARY_TEXT, textAlign: "left" }]}>Quality products</Text>
                                            <Text style={tw`${typography.smText}`}>{item.description.substring(0, 30)}</Text>
                                            <Text style={tw`mt-3 bg-yellow-300 p-2 rounded ${typography.smText}`}>{"Shop now >"}</Text>
                                        </View>
                                        <Image
                                            source={{ uri: item.thumbnail }}
                                            style={[tw`h-full`, { width: spaces.width / 2.5 }]}
                                            resizeMode={"contain"}
                                        />
                                    </View>
                                )
                            }}
                        />
                    </View>

                    {/* fragments */}
                    <View style={tw`mt-5 mb-2 w-full`}>
                        <View style={tw`justify-between flex-row`}>
                            <Text style={[tw`${typography.smText} mb-3`, { color: colors.BOX_BLACK }]}>Grocery</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.ALL_PRODUCTS)}>
                                <Text style={tw`${typography.smText}`}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Carousel
                            vertical={false}
                            width={spaces.width / 2}
                            height={spaces.heightHalf * .6}
                            style={{ width: spaces.width }}
                            loop
                            data={this.categoryMaker("groceries")}
                            renderItem={({ item, index }) => <Text>hhh</Text>}
                        />
                    </View>
                    {/* popular */}
                    <View style={tw`mt-5 mb-2 w-full`}>
                        <View style={tw`justify-between flex-row`}>
                            <Text style={[tw`${typography.smText} mb-3`, { color: colors.BOX_BLACK }]}>Skincare</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigation.ALL_PRODUCTS)}>
                                <Text style={tw`${typography.smText}`}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <Carousel
                            vertical={false}
                            width={spaces.width / 2}
                            height={spaces.heightHalf * .6}
                            style={{ width: spaces.width }}
                            loop
                            data={this.categoryMaker("skincare")}
                            renderItem={({ item, index }) => <Text>he</Text>}
                        />
                    </View>
                </View>
            </ScrollView>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);