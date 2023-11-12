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

    const revData = await dispatch(createReviewThunk(vehicleId, newReview));

    if (revData?.errors === undefined || !revData.errors) {
      setRevText("");
      setRating(0);
      dispatch(getEveryReviewThunk());
      return closeModal();
    } else {
      setErrors(revData.errors);
    }
  };

  const onChange = (number) => {
    setRating(parseInt(number));
  };


  return (
    <div className="review-modal-container">
      <h1 className="modal-headers">Write a review</h1>

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
          <div className="fine-print">
            <p>*Minimum 10 chars, maximum 1000</p>
          </div>
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
