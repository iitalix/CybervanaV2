import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVehicles } from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";
import Sidebar from "./Sidebar";

export default function AllVehiclesPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const allVehicles = useSelector((state) => state.vehicles.allVehicles);
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  useEffect(() => {
    // Filter vehicles based on selectedMakes
    if (selectedMakes.length === 0) {
      setFilteredVehicles(Object.values(allVehicles));
    }

    else {
      const filtered = Object.values(allVehicles).filter((vehicle) =>
        selectedMakes.includes(vehicle.make)
      );
      setFilteredVehicles(filtered);
    }
  }, [selectedMakes, allVehicles]);

  const handleMakeChange = (make) => {
    // Toggle selectedMakes
    if (selectedMakes.includes(make)) {
      setSelectedMakes(selectedMakes.filter((m) => m !== make));
    }

    else {
      setSelectedMakes([...selectedMakes, make]);
    }
  };

  return (
    <div className="side-and-main-container">
      <Sidebar
        allVehicles={allVehicles}
        selectedMakes={selectedMakes}
        handleMakeChange={handleMakeChange}
      />
      <div className="main-content">
        <div className="header-container">
          <h1 id="all-header">Shop The Best Used Vehicles</h1>
        </div>
        <div className="vehicles-parent-container">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <VehicleCard vehicle={vehicle} user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
