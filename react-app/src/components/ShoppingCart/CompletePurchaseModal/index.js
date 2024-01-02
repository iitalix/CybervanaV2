import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { thunkDeleteUserItems, thunkGetAllItems } from "../../../store/items";
import { useHistory } from "react-router-dom";

export default function CompletePurchaseModal({ userId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const { push } = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(thunkDeleteUserItems(userId));

        return dispatch(thunkGetAllItems())
        .then(closeModal)
        .then(push('/items/current'))
    };

    return (
        <div id="delete-vehicle-modal-container">
        <h1>Complete Transaction</h1>
        <p className="delete-confirm">
           Purchase Vehicles?
        </p>
        <p>Vehicles will be cleared from your Cart but will remain on the marketplace
            <br/> pending funds transfer verification from Vehicle Owners.
        </p>
        <p>Thank you for shopping Cybervana!</p>
        <div className="confirm-buttons">
            <button className="delete-button" onClick={handleSubmit}>
            Yes (Complete Purchase)
            </button>
            <button className="cancel-button" onClick={closeModal}>
            No (Cancel Purchase)
            </button>
        </div>
     </div>
    )
}
