import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/userData";
import productReducer from "../slices/product";

const store = configureStore({
    reducer: {
        dataReducer,
        productReducer
    }
})

export default store;