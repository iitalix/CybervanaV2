import React from "react";


export default function VehicleCard({vehicle}) {
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
          <div>
            {vehicle.make}, {vehicle.model}
          </div>
          <div>
            {vehicle.description}
          </div>

          {vehicle.avgRating === "NaN" && (
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
          )}
        </div>

        <div>{`$${vehicle.price}`}</div>
      </div>
    </div>
  );
}
