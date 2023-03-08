import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const signSlice = createSlice({
    initialState,
    name: "sign",
    reducers: {
        setSignData: function(state, action) {
            state.data = action.payload;
        }
    }
})

const { actions: { setSignData }, reducer } = signSlice;

export default reducer;
export { setSignData }

