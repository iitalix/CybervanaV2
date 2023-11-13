import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllVehicles} from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";

export default function ShopRayfieldPage() {
  const dispatch = useDispatch();
  const {push} = useHistory();
  const user = useSelector((state) => state.session.user);
  const allVehicles = useSelector((state) => state.vehicles.allVehicles);
  const arrVehicles = Object.values(allVehicles).filter(
    (vehicle) => vehicle.make === "Rayfield"
  );
  const vehicles = [...arrVehicles];

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  if (!arrVehicles.length) return null;

  return (
    <div className="parent-container">
      <div className="header-container">
        <h1>Shop Rayfield's Most Popular Vehicles</h1>
        <button onClick={goToAllVehicles} className="header-buttons">
          Explore All Vehicles
        </button>
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
