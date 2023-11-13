import React from "react";
import { useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getAllVehicles } from "../../store/vehicles";
import OpenModalButton from "../OpenModalButton";
import ProfileButton from "./ProfileButton";
import CreateVehicleModal from "../Vehicles/CreateVehicleModal";
import logo from "../../images/logo.png";
import "./Navigation.css";

function Navigation({isLoaded}) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleClick = async (e) => {

    await dispatch(getAllVehicles());
    return push("/")
  }

  return (
    <div className="nav-container">
      <nav className="header">
        <div className="logo-container">
          <div onClick={handleClick}>
            <img src={logo} alt="logo" id="logo" />
          </div>
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
