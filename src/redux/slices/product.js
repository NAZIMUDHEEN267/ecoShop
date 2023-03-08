import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    deleted: [],
    delivered: []
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
                if(item.id !== action.payload.id) {
                    return item;
                } else {
                    state.deleted.push(item);
                }
            })
        }
    }
})

const { actions: { setProduct, delProduct }, reducer } = productSlice;

const mapStateToProps = (state) => ({ productData: state.productReducer });

const mapDispatchToProps = dispatch => {
    return {
        setProductData: (data) => dispatch(setProduct(data)),
        delProductData: (data) => dispatch(delProduct(data))
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
