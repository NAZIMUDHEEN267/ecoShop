import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../slices/sign";

const store = configureStore({
    reducer: {
        signReducer,
    }
})

export default store;