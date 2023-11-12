import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useModal} from "../../../context/Modal";
import StarInputRatings from "../../StarInputRatings";
import {updateReviewThunk, getEveryReviewThunk} from "../../../store/reviews";

export default function UpdateReviewModal({reviewId}) {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const [errors, setErrors] = useState({});
  const allReviews = useSelector((state) => state.reviews.allReviews);
  const reviewToUpdate = allReviews[reviewId];
  const [revText, setRevText] = useState(reviewToUpdate.review);
  const [rating, setRating] = useState(reviewToUpdate.stars);

  useEffect(() => {
    dispatch(getEveryReviewThunk());
  }, [dispatch, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: revText,
      stars: rating,
    };

    const newRevData = await dispatch(updateReviewThunk(newReview, reviewId));

    if (newRevData?.errors === undefined || !newRevData.errors) {
      setRevText("");
      setRating(0);
      dispatch(getEveryReviewThunk());
      return closeModal();
    } else {
      setErrors(newRevData.errors);
    }
  };

  const onChange = (number) => {
    setRating(parseInt(number));
  };


  return (
    <div className="review-modal-container">
      <h1 className="modal-headers">Update your review</h1>

      <div className="listerrors-rev-container">
        {errors &&
          errors.length >= 1 &&
          errors.map((error, idx) => (
            <p className="list-errors" key={idx}>
              {error}
            </p>
          ))}
      </div>

      <form onSubmit={handleSubmit} className="review-form-container">
        <div className="stars-container">
          <StarInputRatings
            disabled={false}
            onChange={onChange}
            rating={rating}
          />
        </div>

        <label>
          <textarea
            type="text"
            id="review-text-area"
            value={revText}
            placeholder="Leave your review here..."
            onChange={(e) => setRevText(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="submit-button"
          id="review-submit"
        >
          Submit Your Review
        </button>
      </form>
    </div>
  );
}
