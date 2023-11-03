import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVehicles } from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";

export default function AllVehiclesPage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allVehicles = useSelector((state) => state.vehicles.allVehicles);
    const arrVehicles = Object.values(allVehicles);
    const vehicles = [...arrVehicles];

    useEffect(() => {
        dispatch(getAllVehicles());
    }, [dispatch]);

    if (!arrVehicles.length) return null;

    return (
        <div className="parent-container">
            <h1>Shop Night City's Best Used Vehicles</h1>
            <div className="vehicles-parent-container">
                {vehicles.map((vehicle) => (

                    <div key={vehicle.id} className="vehicle-card">
                        <VehicleCard vehicle={vehicle} user={user}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
