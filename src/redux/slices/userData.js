import { createSlice } from "@reduxjs/toolkit";
import checkUser from "../../utils/checkUser";

const initialState = {
    data: {}
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
        }
}
})

const { actions: { setSignData, setLogData }, reducer } = signSlice;

const mapStateToProps = (state) => ({ getData: state.dataReducer.data });

const mapDispatchToProps = dispatch => {
    return {
        setSignData: async (data) => {
            const isUser = await checkUser("sign", data);
            if(!isUser) {
                dispatch(setSignData(data));
                return isUser;
            } else {
                return isUser;
            }
        },
        setLogData: async (data) => {
            const isUser = await checkUser("login", data);
            if (isUser) {
                dispatch(setLogData(data));
                return isUser;
            } else {
                return isUser;
            }
        }
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
