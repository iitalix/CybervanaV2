import React from "react";
import OpenModalButton from "../../OpenModalButton";
import UpdateVehicleModal from "../UpdateVehicleModal";
import DeleteVehicleModal from "../DeleteVehicleModal";

export default function VehicleCard({vehicle, user}) {
  return (
    <div className="card-container" title={vehicle.name}>
      <div>
        <img
          src={`${vehicle.photoUrl}`}
          alt="vehicle"
          className="card-image"
        ></img>
      </div>
      <div className="card-details">
        <div>
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
      </div>

      <div className="update-delete-container">
        <div id="update-vehicle-button">
          <OpenModalButton
            buttonText="Update"
            modalComponent={<UpdateVehicleModal vehicleId={vehicle.id}/>}
          />
          <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeleteVehicleModal vehicleId={vehicle.id}/>}
          />
        </div>
      </div>
    </div>
  );
}
