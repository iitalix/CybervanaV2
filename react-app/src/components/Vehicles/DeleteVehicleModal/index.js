import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { deleteVehicleThunk, getOwnerVehicles } from "../../../store/vehicles";
import { useHistory } from "react-router-dom";

export default function DeleteVehicleModal({ vehicleId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    // const [errors, setErrors] = useState({});
    const { push } = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(deleteVehicleThunk(vehicleId));

        return dispatch(getOwnerVehicles())
        .then(closeModal)
        .then(push('/vehicles/current'))
    };

    return (
        <div id="delete-vehicle-modal-container">
        <h1>Delete Post</h1>
        <p className="delete-confirm">
           Remove this vehicle?
        </p>
        <div className="confirm-buttons">
            <button className="delete-button" onClick={handleSubmit}>
            Yes (Delete Vehicle)
            </button>
            <button className="cancel-button" onClick={closeModal}>
            No (Keep Vehicle)
            </button>
        </div>
     </div>
    )
}
