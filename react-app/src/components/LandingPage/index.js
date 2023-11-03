import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "../LandingPage/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landingpage-parent-container">
      <div className="landing-banner-section">
        <img
          src="https://cybervana.s3.us-west-1.amazonaws.com/cybervana-banner.png"
          id="landing-image"
        />
        <div id="banner-overlay-header">DEALS ON WHEELS</div>
        <div id="banner-overlay-sub">The Best Selection in Night City</div>
      </div>
    </div>
  );
}
