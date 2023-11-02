import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import OpenModalButton from "../OpenModalButton";
import ProfileButton from "./ProfileButton";
import CreateVehicleModal from "../Vehicles/CreateVehicleModal";
import logo from "../../images/logo.png";
import "./Navigation.css";

function Navigation({isLoaded}) {
  const {push} = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="nav-container">
      <nav className="header">
        <div className="logo-container">
          <NavLink exact to="/vehicles/all">
            <img src={logo} alt="logo" id="logo" />
          </NavLink>
        </div>

        <div>
          <div className="profile-corner-container">
            {isLoaded && sessionUser && (
              <div className="nav-links">
                <div id="post-vehicle-button">
                  <OpenModalButton
                    buttonText="Post Your Vehicle"
                    modalComponent={<CreateVehicleModal />}
                  />
                </div>
              </div>
            )}
            {isLoaded && (
              <div className="profile-menu-container">
                <div>
                  <ProfileButton user={sessionUser} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
