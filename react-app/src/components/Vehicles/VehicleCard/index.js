import React from "react";
import OpenModalButton from "../../OpenModalButton";
import UpdateVehicleModal from "../UpdateVehicleModal";
import DeleteVehicleModal from "../DeleteVehicleModal";

export default function VehicleCard({vehicle, user}) {
  return (
    <div className="card-container" title={vehicle.name}>
      <img src={`${vehicle.photoUrl}`} alt="vehicle" className="card-image" />

      <div id="card-details-buttons-container">
        <div className="card-details">
          <div id="card-make-model">
            {vehicle.make} {vehicle.model}
          </div>
          <div>{`$${vehicle.price}`}</div>

          {/* {vehicle.avgRating === "NaN" && (
              <div id="star-new">
                <i className="fa-solid fa-star"></i>
                <div>New</div>
              </div>
            )}

            {vehicle.avgRating !== "NaN" && (
              <div>
                <i className="fa-solid fa-star"></i>
                {vehicle.avgRating}
              </div>
            )} */}
        </div>

        <div className="update-delete-container">
          <div id="update-delete-buttons">
            <OpenModalButton
              buttonText="Update"
              id="update"
              modalComponent={<UpdateVehicleModal vehicleId={vehicle.id} />}
            />
            <OpenModalButton
              buttonText="Delete"
              id="delete"
              modalComponent={<DeleteVehicleModal vehicleId={vehicle.id} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
