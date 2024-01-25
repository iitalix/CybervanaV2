import React from "react";
import {useHistory} from "react-router-dom";

export default function BrandCard() {
  const {push} = useHistory();

  const goToRayfield = () => {
    return push("/vehicles/brand/rayfield");
  };

  const goToThornton = () => {
    return push("/vehicles/brand/thornton");
  };

  const goToQuadra = () => {
    return push("/vehicles/brand/quadra");
  };

  const goToMizutani = () => {
    return push("/vehicles/brand/mizutani");
  };

  return (
    <div className="parent-container">
      <div className="header-container">
        <h2 className="text-center">Browse Popular Makes</h2>
      </div>
      <div
        id="brandcard-parent-container"
        className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 my-4"
      >
        <div
          className="brandcard-container"
          id="rayfield-card"
          onClick={goToRayfield}
        >
          <img
            src="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldaerondightguinevre.jpg"
            alt="vehicle"
            className="w-full h-auto"
          />
          <p className="text-center">Rayfield</p>
        </div>

        <div
          className="brandcard-container"
          id="thornton-card"
          onClick={goToThornton}
        >
          <img
            src="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbylittlemule.jpg"
            alt="vehicle"
            className="w-full h-auto"
          />
          <p className="text-center">Thornton</p>
        </div>

        <div
          className="brandcard-container"
          id="quadra-card"
          onClick={goToQuadra}
        >
          <img
            src="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66avenger.jpg"
            alt="vehicle"
            className="w-full h-auto"
          />
          <p className="text-center">Quadra</p>
        </div>

        <div
          className="brandcard-container"
          id="mizutani-card"
          onClick={goToMizutani}
        >
          <img
            src="https://cybervana.s3.us-west-1.amazonaws.com/mizutanishioncoyotered.jpg"
            alt="vehicle"
            className="w-full h-auto"
          />
          <p className="text-center">Mizutani</p>
        </div>
      </div>
    </div>
  );
}
