import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
// import VehicleCard from "../VehicleCard";
import BrandCard from "../../BrandCards";
import { thunkGetAllItems } from "../../../store/items";

export default function ItemsPage() {
  const {push} = useHistory();
  const user = useSelector((state) => state.session.user);
  const allItems = useSelector((state) => state.items.allItems);
  const items = Object.values(allItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetAllItems());
  }, [dispatch]);

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  return (
    <div className="vehicle-details-page-container">
      <div className="header-container">
        <h1>Purchase Vehicles</h1>
        <button onClick={goToAllVehicles} className="header-buttons">
          Explore All Vehicles
        </button>
      </div>

      <div>
        {!items.length && (
          <div className="no-posts">
            <p>You currently have no vehicles for purchase.</p>
            <div>
              <BrandCard />
            </div>
          </div>
        )}
      </div>

      <div className="vehicles-parent-container">
        {items.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">

          </div>
        ))}
      </div>
    </div>
  );
}
