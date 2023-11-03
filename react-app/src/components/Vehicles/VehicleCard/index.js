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
          <div className="card-make-model">
            {vehicle.make} {vehicle.model}
          </div>
          <div className="card-make-model">{`$${vehicle.price}`}</div>
        </div>

        {user.id === vehicle.ownerId &&

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
        }
      </div>
    </div>
  );
}
