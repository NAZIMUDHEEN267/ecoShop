import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payment: []
}

const paymentSlice = createSlice({
    initialState,
    name: "payment",
    reducers: {
        setPaymentDetails: function (state, action) {
            state.cart.push(action.payload);
        }
    }
})

const { actions: { setPaymentDetails }, reducer } = paymentSlice;

const mapStateToProps = (state) => ({ productData: state.paymentReducer });

const mapDispatchToProps = dispatch => {
    return {
        setPayment: (data) => dispatch(setPaymentDetails(data))
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };