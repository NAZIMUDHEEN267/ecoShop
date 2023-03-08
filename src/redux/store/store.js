import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/userData";
import productReducer from "../slices/product";
import paymentReducer from "../slices/payment";

const store = configureStore({
    reducer: {
        dataReducer,
        productReducer,
        paymentReducer
    }
})

export default store;