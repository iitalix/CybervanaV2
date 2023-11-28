import React, {useState, useRef, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getAllVehicles} from "../../store/vehicles";
import OpenModalButton from "../OpenModalButton";
import ProfileButton from "./ProfileButton";
import CreateVehicleModal from "../Vehicles/CreateVehicleModal";
import SearchBar from "../../components/Search/Searchbar";
import ResultsList from "../../components/Search/ResultsList";
import logo from "../../images/logo.png";
import "./Navigation.css";

function Navigation({isLoaded}) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const {push} = useHistory();
  const [results, setResults] = useState([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const resultsContainerRef = useRef(null);

  const handleClick = async (e) => {
    await dispatch(getAllVehicles());
    return push("/");
  };

  const clearSearch = () => {
    setResults([]);
    setIsResultsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (
      resultsContainerRef.current &&
      !resultsContainerRef.current.contains(event.target)
    ) {
      clearSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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
            <div>
              <SearchBar
                setResults={setResults}
                setIsResultsOpen={setIsResultsOpen}
                results={results}
                isResultsOpen={isResultsOpen}
                clearSearch={clearSearch}
              />
            </div>
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
