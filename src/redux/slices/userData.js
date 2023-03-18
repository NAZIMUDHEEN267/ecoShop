import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    userFirst: true,
    showHome: false,
    userlogin: false
}

const signSlice = createSlice({
    initialState,
    name: "userData",
    reducers: {
        setSignData: function (state, action) {
            state.data = action.payload;
        },
        setLoginData: function (state, action) {
            state.userlogin = action.payload;
        },
        setUser: function (state, action) {
            state.userFirst = action.payload;
        },
        showHome: function (state, action) {
            state.showHome = action.payload;
        }
}
})

const { actions: { setSignData, setLoginData, setUser, showHome }, reducer } = signSlice;

const mapStateToProps = (state) => ({ getData: state.dataReducer });

const mapDispatchToProps = dispatch => {
    return {
        setSignData: (data) => dispatch(setSignData(data)),
        setLogData: (data) => dispatch(setLoginData(data)),
        setUserLog: (data) => dispatch(setUser(data)),
        setShowHome: (data) => dispatch(showHome(data)) 
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
