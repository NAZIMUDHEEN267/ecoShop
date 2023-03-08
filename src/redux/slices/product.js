import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    deleted: [],
    delivered: [],
    showCategory: false,
    category: "New arrivals",
    products: null
}

const productSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setProduct: function (state, action) {
            state.cart.push(action.payload);
        },
        delProduct: function (state, action) {
            state.cart = state.cart.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    state.deleted.push(item);
                }
            })
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
