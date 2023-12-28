import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import OpenModalButton from "../../OpenModalButton";
import UpdateVehicleModal from "../UpdateVehicleModal";
import DeleteVehicleModal from "../DeleteVehicleModal";
import AvgReview from "../../Reviews/AvgReview";
import { getVehicleReviewsThunk } from "../../../store/reviews";
import { thunkCreateItem, thunkGetAllItems } from "../../../store/items";


export default function VehicleCard({vehicle}) {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const goToVehicleDetails = () => {
    return push(`/vehicles/${vehicle.id}`);
  };

  const purchaseVehicle = async () => {
    await dispatch(thunkCreateItem(vehicle.id));
    await dispatch(thunkGetAllItems());

    push("/items/current");
  }

  useEffect(() => {
    if (vehicle && vehicle.id) {
      dispatch(getVehicleReviewsThunk(vehicle.id));
    }
  }, [dispatch, vehicle]);


  return (
    <div className="card-container">
      <img
        src={`${vehicle.photoUrl}`}
        alt="vehicle"
        className="card-image"
        onClick={goToVehicleDetails}
      />

      <div id="card-details-buttons-container">
        <div className="card-details" onClick={goToVehicleDetails}>
          <div className="card-make-model">
            {vehicle.make} {vehicle.model}
          </div>
          <div className="card-make-model">{`$${vehicle.price}`}</div>
        </div>

        <div>
          <AvgReview reviews={vehicle.reviews}/>
        </div>

        {sessionUser?.id === vehicle.ownerId && (
          <div className="update-delete-container">
            <div id="update-delete-buttons">
              <OpenModalButton
                buttonText="Update"
                modalComponent={<UpdateVehicleModal vehicleId={vehicle.id} />}
              />

              <OpenModalButton
                buttonText="Delete"
                modalComponent={<DeleteVehicleModal vehicleId={vehicle.id} />}
              />
            </div>
          </div>
        )}

        {sessionUser?.id !== vehicle.ownerId && (
          <div className="update-delete-container">
            <div id="add-remove-buttons">
              <button onClick={purchaseVehicle}>Purchase Vehicle</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
