import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { useHistory } from "react-router-dom";
import { getEveryReviewThunk, deleteReviewThunk } from "../../../store/reviews";

export default function DeleteReviewModal({ reviewId, vehicleId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [errors, setErrors] = useState({});
    const { push } = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        await dispatch(deleteReviewThunk(reviewId));

        return dispatch(getEveryReviewThunk())
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json();

            if (data.errors) {
                setErrors(data.errors);
            }
        })
        .then(push(`/vehicles/${vehicleId}`))
    };

    return (
        <div id="delete-vehicle-modal-container">
        <h1>Delete Your Review</h1>
        <p className="delete-confirm">
           Delete this review?
        </p>
        <div className="confirm-buttons">
            <button className="delete-button" onClick={handleSubmit}>
            Yes (Delete Review)
            </button>
            <button className="cancel-button" onClick={closeModal}>
            No (Keep Review)
            </button>
        </div>
     </div>
    )
}
