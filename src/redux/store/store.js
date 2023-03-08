import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/userData";

const store = configureStore({
    reducer: {
        dataReducer
    }
})

export default store;