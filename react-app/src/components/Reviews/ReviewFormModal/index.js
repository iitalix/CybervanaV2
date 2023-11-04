import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useModal} from "../../../context/Modal";
import StarInputRatings from "../../StarInputRatings";
import {createReviewThunk, getEveryReviewThunk} from "../../../store/reviews";

export default function ReviewFormModal({vehicleId}) {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const [revText, setRevText] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: revText,
      stars: rating,
    };

    dispatch(createReviewThunk(vehicleId, newReview));
    setRevText("");
    setRating(0);
    return await dispatch(getEveryReviewThunk()).then(closeModal());
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
      <p className="modal-headers">Write a review!</p>
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
