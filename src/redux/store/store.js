import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/userData";
import productReducer from "../slices/product";
import paymentReducer from "../slices/payment";

const store = configureStore({
    reducer: {
        dataReducer,
        productReducer,
        paymentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;