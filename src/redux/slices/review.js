import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    initialState: {
        reviews: []
    },
    name: "review",
    reducers: {
        pushReview: function(state, action){
            state.reviews.push(action.payload);
        }
    }
});

const { actions: { pushReview}, reducer} = reviewSlice;

const mapStateToProps = (state) => ({getReviews: state.reviewReducer.review})

const mapDispatchToProps = (dispatch) => {
    setReview: (review) => dispatch(pushReview(review));
}

export default reducer;
export { mapStateToProps, mapDispatchToProps };