import { createSlice } from "@reduxjs/toolkit";
import { deleteItemFromCart } from "../../utils/addCart";

const initialState = {
    cart: [],
    deleted: [],
    delivered: [],
    showCategory: false,
    category: "New arrivals",
    products: null,
}

const productSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setProduct: function (state, action) {
            if(action.payload?.products) {
                state.cart = action.payload.products;
                return 
            }

            state.cart = [...state.cart, action.payload];
        },
        delProduct: function (state, action) {
            deleteItemFromCart(action.payload);
            state.deleted.push(action.payload);
        },
        showCategory(state, action) {
            state.showCategory = action.payload;
        },
        editCategory: function (state, action) {
            state.category = action.payload;
        },
        setApiProducts: function (state, action) {
            state.products = action.payload;
        }
    }
})

const { actions: { setProduct, delProduct, showCategory, editCategory, setApiProducts }, reducer } = productSlice;

const mapStateToProps = (state) => ({ productData: state.productReducer });

const mapDispatchToProps = dispatch => {
    return {
        setProductData: (data) => dispatch(setProduct(data)),
        delProductData: (data) => dispatch(delProduct(data)),
        setShowCategory: (val) => dispatch(showCategory(val)),
        setEditCategory: (str) => dispatch(editCategory(str)),
        changeApiProducts: (data) => dispatch(setApiProducts(data))
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
