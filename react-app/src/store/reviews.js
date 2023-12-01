//types

const READ_REVIEWS = "/read_reviews";
const ADD_REVIEW = "/add_review";
// const UPDATE_REVIEW = "/update_review";
const DELETE_REVIEW = "/delete_review";
const GET_VEHICLE_REVIEWS = "/get_vehicle_reviews"

//action creator

const actionReadReviews = (review) => ({ type: READ_REVIEWS, review });
// const actionUpdateReview = (review)) => ({ type: UPDATE_REVIEW, review });
const actionDeleteReview = (id) => ({ type: DELETE_REVIEW, id });
const actionAddReview = (review) => ({ type: ADD_REVIEW, review });
const actionGetVehicleReviews = (reviews) => ({ type: GET_VEHICLE_REVIEWS, reviews})

//thunks

//Get All Reviews
export const getEveryReviewThunk = () => async (dispatch) => {
   const res = await fetch("/api/reviews/all");

   if (res.ok) {
      const data = await res.json();
      dispatch(actionReadReviews(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

//Get All Vehicle Reviews
export const getVehicleReviewsThunk = (vehicleId) => async (dispatch) => {
   const res = await fetch(`/api/reviews/vehicles/${vehicleId}/`);

   console.log("🚀 ~ file: reviews.js:37 ~ getVehicleReviewsThunk ~ res:", res)

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetVehicleReviews(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

// Create Review
export const createReviewThunk = (vehicleId, review) => async (dispatch) => {
   const response = await fetch(`/api/reviews/new/vehicles/${vehicleId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
   });

   if (response.ok) {
      const data = await response.json();

      dispatch(actionAddReview(data));
      return data;
   } else {
      const errors = await response.json();
      return errors;
   }
};

// Update/Edit Review
export const updateReviewThunk = (review, reviewId) => async (dispatch) => {
   const response = await fetch(`/api/reviews/${reviewId}/update/vehicles/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
   });

   if (response.ok) {
      const data = await response.json()
      dispatch(actionAddReview(data));
   } else {
      const errors = response.json();
      return errors;
   }
};

// Delete Revew
export const deleteReviewThunk = (reviewId) => async (dispatch) => {

   const response = await fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
   });

   const data = response.json();
   dispatch(actionDeleteReview(reviewId));
   return data;
};

// Reducer

const initialState = { allReviews: {}, vehicleReviews: {} };

export default function reviewsReducer(state = initialState, action) {
   let newState;
   switch (action.type) {
      case READ_REVIEWS:
         newState = { ...state, allReviews: {} };
         action.review.forEach((review) => (newState.allReviews[review.id] = review));
         return newState;

      case ADD_REVIEW:
         newState = {
            ...state,
            allReviews: { ...state.allReviews },
         };
         newState.allReviews[action.review.id] = action.review;
         console.log("newSTATE::", newState)
         return newState;

      case DELETE_REVIEW:
         newState = { ...state, allReviews: { ...state.allReviews } };
         delete newState.allReviews[action.id];
         return newState;

      case GET_VEHICLE_REVIEWS:
         newState = { ...state, allReviews: {}, vehicleReviews: {} };
         action.review.forEach((review) => (newState.vehicleId[review.id] = review));
         return newState;

      default:
         return state;
   }
}
