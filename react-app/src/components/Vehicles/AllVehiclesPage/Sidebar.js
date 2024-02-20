import React from "react";

function Sidebar({allVehicles, selectedMakes, handleMakeChange}) {
  // remove duplicates
  const uniqueMakes = [
    ...new Set(Object.values(allVehicles).map((vehicle) => vehicle.make)),
  ];

  return (
    <div className="sidebar">
      <h2>Filter By:</h2>
      <p>Make:</p>
      {uniqueMakes.map((make) => (
        <div className="input-label-container" key={make}>
          <input
            className="filter-input"
            type="checkbox"
            value={make}
            checked={selectedMakes.includes(make)}
            onChange={() => handleMakeChange(make)}
          />
          <label>{make}</label>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
