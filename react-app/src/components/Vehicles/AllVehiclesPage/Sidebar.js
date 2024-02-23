import React, { useState } from "react";

function Sidebar({ allVehicles, selectedMakes, handleMakeChange, handlePriceChange }) {
  // remove duplicates
  const uniqueMakes = [
    ...new Set(Object.values(allVehicles).map((vehicle) => vehicle.make)),
  ];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handlePriceFilter = () => {
    handlePriceChange(minPrice, maxPrice);
  };

  return (
    <div className="sidebar">
      <h2>Filter By</h2>
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
      <div className="input-price-container">
        <p>Price Range:</p>
        <input
          className="price-input"
          id="min-price"
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          className="price-input"
          id="max-price"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        <button className="apply-button" onClick={handlePriceFilter}>Apply</button>
      </div>
    </div>
  );
}

export default Sidebar;
