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
      <div className="landing-banner-section relative">
        <img
          src="https://cybervana.s3.us-west-1.amazonaws.com/LandingPage02.png"
          id="landing-image"
          alt="motorbike in the city"
          className="w-full h-auto"
        />
        <div id="banner-overlay-header" onClick={goToAllVehicles} className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <p>DEALS ON WHEELS</p>
          <p id="subheading">Browse Night City's Best Used Vehicles</p>
        </div>
      </div>

      <div>
        <BrandCard />
      </div>
    </div>
  );
}
