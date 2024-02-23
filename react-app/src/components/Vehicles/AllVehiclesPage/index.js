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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  useEffect(() => {
    // Filter by Make
    let filtered = Object.values(allVehicles);

    if (selectedMakes.length > 0) {
      filtered = filtered.filter((vehicle) =>
        selectedMakes.includes(vehicle.make)
      );
    }

    // Filter by Price Range
    if (minPrice !== "" && maxPrice !== "") {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.price >= parseInt(minPrice) && vehicle.price <= parseInt(maxPrice)
      );
    }

    setFilteredVehicles(filtered);
  }, [selectedMakes, allVehicles, minPrice, maxPrice]);

  const handleMakeChange = (make) => {
    // Toggle selectedMakes
    if (selectedMakes.includes(make)) {
      setSelectedMakes(selectedMakes.filter((m) => m !== make));
    } else {
      setSelectedMakes([...selectedMakes, make]);
    }
  };

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="side-and-main-container">
      <Sidebar
        allVehicles={allVehicles}
        selectedMakes={selectedMakes}
        handleMakeChange={handleMakeChange}
        handlePriceChange={handlePriceChange}
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
