import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    userFirst: true,
}

const signSlice = createSlice({
    initialState,
    name: "userData",
    reducers: {
        setSignData: function (state, action) {
            state.data = action.payload;
        },
        setLogData: function (state, action) {
            state.data = action.payload;
        },
        setUser: function (state, action) {
            state.userFirst = action.payload;
        }
}
})

const { actions: { setSignData, setLogData, setUser }, reducer } = signSlice;

const mapStateToProps = (state) => ({ getData: state.dataReducer });

const mapDispatchToProps = dispatch => {
    return {
        setSignData: async (data) => dispatch(setSignData(data)),
        setLogData: async (data) => dispatch(setLogData(data)),
        setUserLog: (data) => dispatch(setUser(data))
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
