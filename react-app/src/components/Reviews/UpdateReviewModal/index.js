import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useModal} from "../../../context/Modal";
import StarInputRatings from "../../StarInputRatings";
import {updateReviewThunk, getEveryReviewThunk} from "../../../store/reviews";

export default function UpdateReviewModal({reviewId}) {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const [errors, setErrors] = useState({});
  const allReviews = useSelector((state) => state.reviews.allReviews)
  const reviewToUpdate = allReviews[reviewId];
  const [revText, setRevText] = useState(reviewToUpdate.review);
  const [rating, setRating] = useState(reviewToUpdate.stars);

  useEffect(() => {
    dispatch(getEveryReviewThunk());
  }, [dispatch, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: revText,
      stars: rating,
    };

    dispatch(updateReviewThunk(newReview, reviewId));
    setRevText("");
    setRating(0);
    return dispatch(getEveryReviewThunk()).then(closeModal());
  };

  const disableSubmit = () => {
    if (revText.length < 10 || rating === 0) return true;
  };

  const onChange = (number) => {
    setRating(parseInt(number));
  };

  const ulClassName = disableSubmit ? " " : "action-button";

  return (
    <div className="review-modal-container">
      <h1 className="modal-headers">Update your review</h1>
      {errors.review && <p>{errors.review}</p>}
      {errors.stars && <p>{errors.stars}</p>}
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
          className={ulClassName}
          id="review-submit"
          disabled={disableSubmit()}
        >
          Submit Your Review
        </button>
      </form>
    </div>
  );
}
