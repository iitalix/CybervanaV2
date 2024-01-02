import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getOwnerVehicles} from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";
import BrandCard from "../../BrandCards";

export default function YourVehiclesPage() {
  const {push} = useHistory();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const ownerVehicles = useSelector((state) => state.vehicles.ownerVehicles);
  const arrOwnerVehicles = Object.values(ownerVehicles);
  const vehicles = [...arrOwnerVehicles];

  useEffect(() => {
    dispatch(getOwnerVehicles());
  }, [dispatch]);

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  return (
    <div className="vehicle-details-page-container">
      <div className="header-container">
        <h1>Manage Your Vehicle Posts</h1>
        <button onClick={goToAllVehicles} className="header-buttons">
          Explore All Vehicles
        </button>
      </div>

      <div>
        {!arrOwnerVehicles.length && (
          <div className="no-posts">
            <p>You currently have no vehicle posts.</p>
            <div>
              <BrandCard />
            </div>
          </div>
        )}
      </div>

      <div className="vehicles-parent-container">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <VehicleCard vehicle={vehicle} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}
