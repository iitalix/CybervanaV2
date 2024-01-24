import React from "react";
import {useHistory} from "react-router-dom";
import BrandCard from "../BrandCards";

export default function LandingPage() {
  const {push} = useHistory();

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  return (
    <div className="landingpage-parent-container">
      <div className="landing-banner-section">
        <img
          src="https://cybervana.s3.us-west-1.amazonaws.com/LandingPage02.png"
          id="landing-image"
          alt="motorbike in the city"
        />
        <div id="banner-overlay-header" onClick={goToAllVehicles}>
          <p>DEALS ON WHEELS</p>
          <p id="subheading">Shop Night City's Best Used Vehicles</p>
        </div>
      </div>

      <div>
        <BrandCard />
      </div>

    </div>
  );
}
