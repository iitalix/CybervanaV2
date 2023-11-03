import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerVehicles } from "../../../store/vehicles";
import VehicleCard from "../VehicleCard";

export default function YourVehiclesPage() {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const ownerVehicles = useSelector((state) => state.vehicles.ownerVehicles)
    const arrOwnerVehicles = Object.values(ownerVehicles);
    const vehicles = [...arrOwnerVehicles];

    useEffect(() => {
        dispatch(getOwnerVehicles());
    }, [dispatch])

    return (
        <div>
            <div className="header-container">
                <h1>Your Vehicles</h1>
                <a href="/vehicles/all">Explore All Vehicles</a>
            </div>
            <div className="vehicles-parent-container">
                {vehicles.map((vehicle) => (

                    <div key={vehicle.id} className="vehicle-card">
                        <VehicleCard vehicle={vehicle} user={user} />
                    </div>
                ))}
            </div>
        </div>
    )
}
