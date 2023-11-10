import React, {useEffect, useState, useRef} from "react";
import { useHistory } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import BrandCard from "../BrandCards";
import "../LandingPage/LandingPage.css";

export default function LandingPage() {
  const { push } = useHistory();

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  return (
    <div className="landingpage-parent-container">
      <div className="landing-banner-section" onClick={goToAllVehicles}>
        <img
          src="https://cybervana.s3.us-west-1.amazonaws.com/cybervana-banner.png"
          id="landing-image"
        />
        <div id="banner-overlay-header">DEALS ON WHEELS</div>
        <div id="banner-overlay-sub">Night City's Best Used Vehicles</div>
      </div>

      <div>
        <BrandCard />
      </div>

      <div id="landing-button-menu">
        <button onClick={goToAllVehicles}>Browse Vehicles</button>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />

        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </div>
    </div>
  );
}
