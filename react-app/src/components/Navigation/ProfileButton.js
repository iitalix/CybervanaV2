import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {logout} from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({user}) {
  const dispatch = useDispatch();
  const {push} = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const goToYourVehicles = () => {
    return push("/vehicles/current");
  };

  const goToYourCart = () => {
    return push("/items/current");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    push("/");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="profile-button-container">
      <button onClick={openMenu} className="profile-button">
        <div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div>
          <i className="fa-regular fa-user"></i>
        </div>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div id="user-menu">
            <div>Welcome {user.firstName}!</div>
            <div id="email">{user.email}</div>
            <div id="user-links">
              <div onClick={goToYourVehicles}>Your Vehicles</div>
              <div onClick={goToYourCart}>Your Cart</div>
              <div onClick={handleLogout}>Log Out</div>
            </div>
          </div>
        ) : (
          <div className="profile-container">
            <OpenModalButton
              buttonText="Log In"
              onClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
