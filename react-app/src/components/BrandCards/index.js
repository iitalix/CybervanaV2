import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export default function BrandCard() {
  const {push} = useHistory();

  const goToRayfield = () => {
    return push("vehicles/rayfield");
  };

  const goToThornton = () => {
    return push("vehicles/thornton");
  };

  const goToQuadra = () => {
    return push("vehicles/quadra");
  };

  const goToMizutani = () => {
    return push("vehicles/mizutani");
  };

  const goToAllVehicles = () => {
    return push("vehicles/all");
  };

  return (
    <div className="parent-container">
      <div className="header-container">
        <h2>Browse Popular Makes</h2>
      </div>
      <div id="brandcard-parent-container">
        <div
          className="brandcard-container"
          id="rayfield-card"
          onClick={goToRayfield}
        >
          <img src="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldaerondightguinevre.jpg" />
          <p>Rayfield</p>
        </div>

        <div
          className="brandcard-container"
          id="thornton-card"
          onClick={goToThornton}
        >
          <img src="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbylittlemule.jpg" />
          <p>Thornton</p>
        </div>

        <div
          className="brandcard-container"
          id="quadra-card"
          onClick={goToQuadra}
        >
          <img src="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66avenger.jpg" />
          <p>Quadra</p>
        </div>

        <div
          className="brandcard-container"
          id="mizutani-card"
          onClick={goToMizutani}
        >
          <img src="	https://cybervana.s3.us-west-1.amazonaws.com/mizutanishioncoyotered.jpg" />
          <p>Mizutani</p>
        </div>
      </div>
    </div>
  );
}
