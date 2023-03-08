import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const signSlice = createSlice({
    initialState,
    name: "sign",
    reducers: {
        setSignData: function (state, action) {
            state.data = action.payload;


        }
    }
})

const { actions: { setSignData }, reducer } = signSlice;

const mapStateToProps = (state) => ({ signData: state.signReducer.data });

const mapDispatchToProps = dispatch => {
    return {
        setData: (data) => {
            return new Promise(function (resolve, reject) {
                if (1 == 1) {
                    resolve("ok");
                } else {
                    reject("good")
                }
            })
        }
    }
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };
